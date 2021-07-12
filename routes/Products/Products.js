const express = require('express');
const router = express.Router();

const Products = require('../../models/Products/Product');
const ProductComments = require('../../models/Comments/ProductComments');
const users = require('../../models/Users/User');

const fs = require('fs');

const {isEmpty, multiImageUplaod, eCommerceUploadDir} = require('../../helpers/upload-helper');
const {verifyToken} = require('../../helpers/authentication');


router.post('/', verifyToken, (req, res) => {
// console.log(req.files)

    /*let initVar = JSON.parse(req.body.variations);
        console.log(req.body)*/
    if (req.isAdmin) {
        try {
            /*initVar.forEach((element,index,variations)=>{
                element.image = multiImageUplaod( Array.isArray(req.files.variation_image)?
                req.files.variation_image[index] : req.files.variation_image,'Ecommerce/products');

                variations[index] = element;
                initVar = variations;
            })*/

            let images = [];

            let variation = req.body.variations.map(va => {
                images.push(va.image)
                return {
                    color: va.color,
                    image: va.image,
                    size: va.size,
                }
            })
            images.push(req.body.image); //add product image
            const product = new Products();
            let allowComments = true;
            if (req.body.allowComments === 'on') {
                allowComments = true;
            } else {
                allowComments = false;
            }
            product.sku = req.body.sku;
            product.name = req.body.name;
            product.price = req.body.price;
            product.discount = req.body.discount;
            product.new = req.body.new;
            product.category = req.body.categories;
            product.tag = req.body.tags;
            product.variation = variation;
            product.image = images
            product.shortDescription = req.body.shortDescription;
            product.fullDescription = req.body.fullDescription;
            product.allowComments = allowComments;
            product.save().then(() => {
                res.status(200).send(true)
            }).catch(err => {
                res.status(500).json(err)
            });
        } catch (err) {
            res.status(400).json(err)
        }
    } else {
        res.status(404).send("No privileg autorized")
    }
});


// get all products
router.get('/', (req, res) => {
    console.log(req.cookies);

    Products.find({})
        // .populate("orderHistory")
        .populate({
            path: 'comments',
            model: ProductComments
        })
        .then(product => {
            res.status(200).json(product);
        })
        .catch(err => {
            res.status(401).json(err);
        });
});


// get and edit a particular product and its comments
router.get('/edit/:product_id', (req, res) => {

    Products.findOne({"_id": req.params.product_id})
        .populate({
            path: 'comments',
            model: ProductComments,
            populate: {
                path: 'user',
                model: users
            }
        })
        .then(product => {
            res.status(200).json(product);
        })
        .catch(err => {
            res.status(500).json(err.toString());
        });
});

// deleting a particular document
router.delete('/:product_id', (req, res) => {

    Products.findOne({_id: req.params.product_id}).then(product => {
        try {// find how to unlink all attached files
            product.image.forEach(element => {
                fs.unlink(eCommerceUploadDir + element, err => {
                });
            });
            product.variation.forEach(element => {
                fs.unlink(eCommerceUploadDir + element.image, err => {
                    console.log(err)
                });
            });
        } catch (err) {

            res.sendStatus(500);
        }
        // cascade deletion
        product.remove();
        res.sendStatus(200);

    });
});


router.put('/edit/:product_id', verifyToken, (req, res) => {
        if (req.isAdmin) {
            let images = [];
            let variation = req.body.variations.map(va => {
                images.push(va.image)
                return {
                    color: va.color,
                    image: va.image,
                    size: va.size,
                }
            })
            images.push(req.body.image); //add product image
            try {
                Products.findOne({"_id": req.params.product_id})
                    .then(product => {
                        let allowComments = true;
                        if (req.body.allowComments == 'on') {
                            allowComments = true;
                        } else {
                            allowComments = false;
                        }
                        product.sku = req.body.sku;
                        product.name = req.body.name;
                        product.price = req.body.price;
                        product.discount = req.body.discount;
                        product.new = req.body.new;
                        product.category = req.body.categories;
                        product.tag = req.body.tags;
                        product.variation = variation;
                        product.image = images
                        product.shortDescription = req.body.shortDescription;
                        product.fullDescription = req.body.fullDescription;
                        product.allowComments = allowComments;
                        product.save().then(() => {
                            console.log()
                            res.status(200).send(true)
                        }).catch(err => {
                            console.log(err)
                            res.status(500).send(false)
                        });

                    });
            } catch (err) {
                console.log(err)
                res.status(400).json(err)
            }
        } else {
            res.status(403).send('You are not authorized to acess this resource')
        }
    }
);


// handling product rating

router.get('/rating/:product_id', (req, res) => {
    // get the corresponding product
    Products.find({_id: req.params.product_id})
        .then(
            product => {
                if (product.rating >= 0) res.status(200).json(product.rating);
                else res.status(200).json(0)
            }
        ).catch(err => {
        console.log(err);
        res.status(400).send("Can't get product rating")
    });
});


router.patch('/rating/:product_id', (req, res) => {
    // if (req.isAdmin) {
        Products.findOne({_id: req.params.product_id},)
            .then(async updateProduct => {
                    updateProduct.usersRating = [...updateProduct.usersRating, req.body.score];
                    let totalScore = updateProduct.usersRating.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    updateProduct.rating = totalScore / updateProduct.usersRating.length;
                    await updateProduct.save().then(e => {
                        res.status(200).json(e)
                    });
                }
            ).catch(err => {
            console.log(err)
            res.status(401).json(err);
        });
    // } else {
    //     res.status(403).send('You are not authorized to acess this resource')
    // }
});


// product comments

router.post('/comments/:product_id', (req, res) => {
    Products.findOne({_id: req.params.product_id})
        .then(product => {
                if (product.allowComments = "true") {

                    let comment = ProductComments({comment: req.body.comment, name: req.body.name, email: req.body.email});
                    comment.save()
                        .then(async newComment => {
                            if (product.comments) await product.comments.push(newComment);
                            else {
                                product.comments = [];
                                product.comments.push(newComment);
                            }
                            product.save().then(prod => {
                                res.status(200).json(newComment);
                            });
                        });
                } else res.sendStatus(403);
            }
        ).catch(err => {
        res.status(400).send(err)
    });

});


// toggle comment visibility
router.patch('/comments-visibilty/:comment_id', verifyToken, (req, res) => {
    if (req.isAdmin) {
        ProductComments.findOne({_id: req.params.comment_id}).then(comment => {
            comment.visible = !comment.visible;
            comment.save().then(comments => {
                res.status(200).send(true);
            });
        });
    } else {
        res.status(403).send('You are not authorized to acess this resource')
    }
});


// delete product comments
router.delete('/comments/:product_id/:comment_id', verifyToken, (req, res) => {
    if (req.isAdmin) {
        ProductComments.findOne({_id: req.params.id}).then(post => {
            post.remove();
            res.status(200).send(true);
        });
    } else {
        res.status(403).send('You are not authorized to acess this resource')
    }
});

// deleting comment


module.exports = router;
