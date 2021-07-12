const express = require('express');
const Subscribers = require('../../models/Users/NewsLetterSubscibers');
const {sendEmail} =  require('../../helpers/mail-sender')
const {verifyToken} =  require('../../helpers/authentication')
const router = express.Router();

// router.all('/*', verifyToken)

router.get('/', verifyToken, (req, res)=>{
    if(req.isAdmin)
    {
        Subscribers.find({}).then(subscriber =>{res.status(200).json(subscriber);});
    }
    else
    {
        res.status(403).send('You are not authorized to acess this resource')
    }
});

router.delete('/:id', verifyToken, (req, res)=>{
    if(req.isAdmin)
    {
        Subscribers.findOneAndDelete({_id:req.params.id}).then(subscriber =>{res.status(200).json(subscriber);});
    }
    else
    {
        res.status(403).send('You are not authorized to acess this resource')
    }
});



router.post('/',async (req, res)=>{

    //check for email
    let subscriberExist = await Subscribers.findOne({email:req.body.email})
    if(subscriberExist){
         res.status(200).json({message:'Email already in newsletter.'})
    }else{
        let sub= new Subscribers({email:req.body.email});
        await sub.save();
        res.status(200).send('Ok.')
    }
     /*   Subscribers({
            email:req.body.email
        }).save().then(subscriber =>{
            res.status(200).send(true)
        }).catch(err=>{
            res.status(400).send(false)
        });*/
    });


module.exports = router;
