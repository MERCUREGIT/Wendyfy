const express = require('express');
const router = express.Router();
const Color = require('../../../../models/Products/Details/Colors');
const Size = require('../../../../models/Products/Details/Size');
const { verifyToken } = require('../../../../helpers/authentication');
const Colors = require('../../../../models/Products/Details/Colors');
const mongoose = require('mongoose');

router.all('/*', verifyToken,(req, res, next) => {
    next();
});

/**
 * Description: Api get request for product categories
 */
router.get('/', (req, res) => {
    Color.find({}).then(
        categories => {
            res.status(200).json(categories);
        }
    ).catch(err=>{
        console.log(err);
        res.status(401).send("Color could not be created")
    });
});

/**
 * Description: Api Post request for product Color creation
 */
router.post('/', (req, res) => {
    const newColor = new Color({
        name: req.body.name,
        color:req.body.color
    }).save().then((result) => {res.status(200).send(true);})
             .catch(err=>{res.status(403).send(false); });

});

/**
 * Decsription: API delete request for product category deletion
 */
router.delete('/delete/:id', (req, res) => {
    Color.remove({ _id: req.params.id }).then(color => {
        res.status(200).send(true);
    }).catch(err=>{res.status(403).send(false); });
});

router.put('/', (req, res)=>{

    mongoose.connection.db.dropCollection("colors", function(err, result){
        if(err){
            console.log("Collection deletion error",err);
        }else console.log("delation sucess")
    })
    new Color({
        name: req.body.name
    }).save().then((result) => {res.status(200).send(true);})
             .catch(err=>{
                 console.log(err);
                 res.status(403).send(false); });
});

module.exports = router;