const express = require('express');
const router = express.Router();
const Tags = require('../../models/Blog/Details/Tags');
const { verifyToken } = require('../../helpers/authentication');
const mongoose = require('mongoose');

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
 * Description: Api get request for product Tags
 */
router.get('/', async (req, res) => {
    if(req.isAdmin)
    {
         res.status(200).json(await Tags.find({}))
    } else
    {
        res.status(403).send('You are not authorized to acess this resource')
    }
});

/**
 * Description: Api Post request for product Tags creation
 */
router.post('/', async (req, res) => {
    let alreadyExisting  =  await Tags.findOne({name:req.body.name}) //return category if already existing
    if(!alreadyExisting){
        let tag =  new Tags({name:req.body.name})
        await tag.save();
        res.status(201).json(tag)
    }else{
        res.status(201).json(alreadyExisting)
    }
/*    const newTags = new Tags({
        name: req.body.name
    }).save().then((result) => {res.status(200).send(true);})
             .catch(err=>{res.status(403).send(false); });*/

});

router.put('/', (req, res)=>{
    mongoose.connection.db.dropCollection("blogtags", function(err, result){
        if(err){
            console.log("Collection deletion error",err);
        }else console.log("delation sucess")
    })
    new Tags({
        name: req.body.name
    }).save().then((result) => {res.status(200).json(result);})
             .catch(err=>{
                 console.log(err)
                res.status(403).send(false); });
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
