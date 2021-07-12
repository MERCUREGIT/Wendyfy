const express = require('express');
const router = express.Router();
// const faker = require('faker');
const Category = require('../../models/Blog/Details/Category');
const { verifyToken } = require('../../helpers/authentication');
const mongoose = require('mongoose')

router.all('/*',verifyToken, (req, res, next) => {
    if(req.isAdmin)
    {
        next();
    }
    else
    {
        res.status(403).send('You are not authorized to acess this resource')
    }
});
/**
 * Description: Api get request for product categories
 */
router.get('/', async (req, res) => {
    if(req.isAdmin)
    {
        let categories = await Category.find({});
        res.status(200).send(categories)
    }
    else
    {
        res.status(403).send('You are not authorized to acess this resource')
    }
});

/**
 * Description: Api Post request for product category creation
 */
router.post('/', async (req, res) => {

    if(req.isAdmin)
    {
        let alreadyExisting  =  await Category.findOne({name:req.body.name}) //return category if already existing
        if(!alreadyExisting){
            let cat =  new Category({name:req.body.name})
            await cat.save();
            res.status(201).send(cat)
        }else{
            res.status(201).send(alreadyExisting)
        }
    }
    else
    {
        res.status(403).send('You are not authorized to acess this resource')
    }

});

router.put('/', (req, res)=>{

    mongoose.connection.db.dropCollection("blogcategories", function(err, result){
        if(err){
            console.log("Collection deletion error",err);
        }else console.log("delation sucess")
    });
    new Category({ name: req.body.name})
            .save()
            .then((result) => {res.status(200).send(true);})
            .catch(err=>{
                console.log(err)
                res.status(403).send(false); });
});

router.delete('/delete/:id',verifyToken, (req, res) => {
    if(req.isAdmin)
    {
    Category.remove({ _id: req.params.id }).then(category => {
        res.status(200).send(true);
    }).catch(err=>{res.status(403).send(false); });
    }
    else
    {
        res.status(403).send('You are not authorized to acess this resource')
    }
});


module.exports = router;
