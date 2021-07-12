const express = require('express');
const router = express.Router();
const Tags = require('../../../../models/Products/Details/Tags');
const mongoose = require('mongoose');
router.all('/*', (req, res, next) => {
    next();
});

/**
 * Description: Api get request for product Tags
 */
router.get('/', (req, res) => {
    Tags.find({}).then(
        Tags => {
            res.status(200).json(Tags);
        }
    ).catch(err=>{
        console.log(err);
        res.status(401).send("Tags could not be created")
    });
});

/**
 * Description: Api Post request for product Tags creation
 */
router.post('/', (req, res) => {
    const newTags = new Tags({
        name: req.body.name
    }).save().then((result) => {res.status(200).send(true);})
             .catch(err=>{res.status(403).send(false); });

});
router.put('/', (req, res)=>{

    mongoose.connection.db.dropCollection("tags", function(err, result){
        if(err){
            console.log("Collection deletion error",err);
        }else console.log("delation sucess")
    })
    new Tags({
        name: req.body.name
    }).save().then((result) => {res.status(200).send(true);})
             .catch(err=>{res.status(403).send(false); });
});
/**
 * Decsription: API delete request for product Tags deletion
 */
router.delete('/delete/:id', (req, res) => {
    Tags.remove({ _id: req.params.id }).then(Tags => {
        res.status(200).send(true);
    }).catch(err=>{res.status(403).send(false); });
});


module.exports = router;