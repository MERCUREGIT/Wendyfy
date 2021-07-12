const express = require('express');
const ClientMessage = require('../../models/message/ClientMessage');
const {verifyToken} =  require('../../helpers/authentication');
const router = express.Router();

// router.all('/*', verifyToken)

router.get('/',verifyToken, (req, res)=>{
    if(req.isAdmin)
    {
        ClientMessage.find({}).then(clientMessage =>{res.status(200).json(clientMessage);});
    }
    else
    {
        res.status(403).send('You are not authorized to access this resource')
    }
});


router.post('/',(req, res)=>{
   try{ let name = req.body.name;
    let email = "";
       email =req.body.email ? req.body.email : "none" ;
    let subject = req.body.subject;
    let body = req.body.message;
    ClientMessage({
            email:email,
            name: name,
            subject: subject,
            body:body
        }).save().then(message =>{
            res.status(200).json(message);
        }).catch(err=>{
            res.status(400).json(err);
        });
    }
    catch(err){
       console.log(err)
    }
}

    );

module.exports = router;
