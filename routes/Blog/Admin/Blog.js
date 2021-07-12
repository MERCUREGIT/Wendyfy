const express = require('express');
const fs = require('fs')
const router = express.Router();
const BlogPost = require('../../../models/Blog/BlogPost');
const users = require('../../../models/Users/User');
const BlogComments = require('../../../models/Comments/BlogComment');
const {multiImageUplaod, uploadDir} = require('../../../helpers/upload-helper');

const {verifyToken} = require('../../../helpers/authentication');


router.all('/*', (req, res, next) => {
    next();
});

// ############################## BLOG SECTION ##############################


router.get('/', (req, res) => {
    BlogPost.find({})
        .populate({
            path: 'comments',
            model: BlogComments,
            populate: {
                path: 'user',
                model: users
            }
        })
        .then(
            post => {
                res.status(200).json(post);
            }
        ).catch(err => {
        console.log(err);
        res.status(401).send("BlogPost could not be found")
    });
});


// getting a particular blog post
router.get('/:id', (req, res) => {
    BlogPost.findOne({"_id": req.params.id})
        .populate({
            path: 'comments',
            model: BlogComments,
            populate: {
                path: 'user',
                model: users
            }
        })
        .then(post => res.status(200).json(post));
});

// updating a blog post
router.post('/', verifyToken, async (req, res) => {
    if (req.isAdmin) {
        /*title:this.title,
        subtitle:this.subtitle,
        tags:this.selectedTags,
        categories:this.selectedCategories,
        description:this.meta_description,
        body:this.body,
        cover:this.chosenImage*/
        console.log("creating post")
        let post = new BlogPost({
            category: req.body.categories,
            tags: req.body.tags,
            subTitle: req.body.subtitle,
            title: req.body.title,
            body: req.body.body,
            description: req.body.description,
            file: req.body.cover,
            allowComments: !!req.body.allowComments,
        });
        await post.save();
        res.status(200).json(post);
        /*let post = BlogPost()
            post.category= req.body.category;
            post.tags=req.body.tags;
            post.title= req.body.title;
            post.subTitle= req.body.subtitle;
            post.status=req.body.status;
            post.body=req.body.body;
            // unlink old media
            post.file=multiImageUplaod(req.files.file,'Blog');
            post.file2=multiImageUplaod(req.files.file2,'Blog');
            post.save().then(savedPost => {
                // unlink old media
            res.status(200).json(savedPost);
            });*/
    } else {
        res.status(403).send('You are not authorized to acess this resource')
    }
});

// updating a blog post
router.put('/:id', verifyToken, (req, res) => {
    if (req.isAdmin) {
        BlogPost.findOneAndUpdate({_id: req.params.id}).then(post => {
            post.category = req.body.categories,
                post.tags = req.body.tags,
                post.subTitle = req.body.subtitle,
                post.title = req.body.title,
                post.body = req.body.body,
                post.description = req.body.description,
                post.file = req.body.cover,
                post.allowComments = !!req.body.allowComments,

                post.save().then(savedPost => {
                    // unlink old media
                    res.status(200).json(savedPost);
                });
        }).catch(r=>{
            console.error(r)
            res.status(403).send({message:'Error updating'})
        });
    } else {
        res.status(403).send('You are not authorized to acess this resource')
    }
});

// deleting blog post
router.delete('/:id', verifyToken, (req, res) => {
    if (req.isAdmin) {
        BlogPost.findOne({_id: req.params.id}).then(post => {
            fs.unlink(uploadDir + post.file, err => {
                post.remove();
            });
            res.send('Sucess deletion');
        });
    } else {
        res.status(403).send('You are not authorized to acess this resource')
    }
});


// ############################## BLOG COMMENTS SECTION ##############################

// creating a blog comments
router.patch('/post-comments/:id', (req, res) => {

    BlogPost.findOne({_id: req.params.id}).then(post => {
        if (post.allowComments = "true") {
            let comment = BlogComments({
                body: req.body.body,
                name: req.body.name,
                email: req.body.email
            })
            comment.save().then(comment => {
                post.comments.push(comment)
                post.save()
                    .then(post => {
                        res.json(comment)
                    });
            });
        } else {
            res.sendStatus(403);
        }
    });
});


// toggle comment visibility
router.patch('/comments-visibilty/:comment_id', verifyToken, (req, res) => {
    if (req.isAdmin) {
        BlogComments.findOne({_id: req.params.comment_id}).then(comment => {
            comment.visible = !comment.visible;
            comment.save().then(comments => {
                res.json(comments);
            })
        });
    } else {
        res.status(403).send('You are not authorized to acess this resource')
    }
});

// delete blog comments
router.delete('/comments/:id', verifyToken, (req, res) => {
    if (req.isAdmin) {
        BlogComments.findOne({_id: req.params.id}).then(post => {
            post.remove();
            res.status(200).send(true);
        });
    } else {
        res.status(403).send('You are not authorized to acess this resource')
    }
});


module.exports = router;
