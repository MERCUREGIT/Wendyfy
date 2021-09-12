const express = require('express');
const router = express.Router();
// const faker = require('faker');
const Category = require('../../../../models/Products/Details/Category');
const mongoose = require('mongoose');

router.all('/*', (req, res, next) => {
    next();
});

/**
 * Description: Api get request for product categories
 */
router.get('/', (req, res) => {
    Category.find({}).then(
        categories => {
            res.status(200).json(categories);
        }
    ).catch(err=>{
        console.log(err);
        res.status(401).send("Category could not be created")
    });
});

/**
 * Description: Api Post request for product category creation
 */
router.post('/', (req, res) => {
    const newCategory = new Category({
        name: req.body.name
    }).save().then((result) => {res.status(200).send(true);})
             .catch(err=>{res.status(403).send(false); });
});

router.put('/', (req, res)=>{

    mongoose.connection.db.dropCollection("categories", function(err, result){
        if(err){
            console.log("Collection deletion error",err);
        }else console.log("delation sucess")
    })
    const newCategory = new Category({
        name: req.body.name
    }).save().then((result) => {res.status(200).send(true);})
             .catch(err=>{res.status(403).send(false); });
});

router.delete('/:id', (req, res) => {
    Category.remove({ _id: req.params.id }).then(category => {
        res.status(200).send(true);
    }).catch(err=>{res.status(403).send(false); });
});


module.exports = router;