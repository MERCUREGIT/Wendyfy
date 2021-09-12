const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../../../helpers/authentication');
const Size = require('../../../../models/Products/Details/SizeNames');
const mongoose = require('mongoose');

router.all('/*', verifyToken);

/**
 * Description: Api get request for product Size
 */
router.get('/', (req, res) => {
    Size.find({}).then(
        size => {
            res.status(200).json(size);
        }
    ).catch(err=>{
        console.log(err);
        // res.status(401)
    });
});

/**
 * Description: Api Post request for product Size creation
 */
router.post('/', (req, res) => {
    const newSize = new Size({
        name: req.body.name
    }).save().then((result) => {res.status(200).send(true);})
             .catch(err=>{res.status(403).send(false); });

});

router.put('/', (req, res)=>{

    mongoose.connection.db.dropCollection("sizenames", function(err, result){
        if(err){
            console.log("Collection deletion error",err);
        }else console.log("delation sucess")
    })
    new Size({
        name: req.body.name
    }).save().then((result) => {res.status(200).send(true);})
             .catch(err=>{res.status(403).send(false); });
});

/**
 * Decsription: API delete request for product category deletion
 */
router.delete('/:id', (req, res) => {
    Size.remove({ _id: req.params.id }).then(Size => {
        res.status(200).send(true);
    }).catch(err=>{res.status(403).send(false); });
});


module.exports = router;