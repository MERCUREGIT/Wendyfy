const express = require('express');
const router = express.Router();
require('dotenv').config();
const Orders = require('../../models/Orders/Orders');
const SpecialOrders = require('../../models/Orders/SpecialOrder');
const {verifyToken} = require('../../helpers/authentication');
const mongoose = require('mongoose');

const { tokenGenerator, logout , maxAgeAccessToken} = require('../../helpers/authentication');

const User = require("../../models/Users/User");
const { UserBindingInstance } = require('twilio/lib/rest/chat/v2/service/user/userBinding');



const createToken= (user)=>{
    return {
        ACCESS_TOKEN: tokenGenerator({user},process.env.ACCESS_TOKEN_SECRET),
        }
}
//############################# LOGOUT ##########################################""""


router.delete('/logout',logout,(req, res)=>{
    console.log(req.cookies)
    res.json({status:"logout sucess"});

});

//############################# LOGIN ##########################################""""

router.post('/login',async (req, res)=>{
    console.log(req.body);
    const { email, password} =  req.body;
    try
    {
      const user = await User.login(email, password);
      if(user && mongoose.Types.ObjectId.isValid(user._id))
        {
            const token = createToken(user).ACCESS_TOKEN;
                res.cookie("accessjwt", token, {maxAge:maxAgeAccessToken*1000})
                const orders={};
                Orders.find({user:user._id}).then(result=>{
                    orders.normal = result
                });
                SpecialOrders.find({user:user._id}).then(result=>{
                    orders.special = result
                })
                res.status(200).json({user:user._id, username: user.username, email:user.email, userRole: user.userRole,accessToken: token});     
        }
        else
        {
            res.status(401).json({"error":"Invalid user account"})
        }
    }
    catch (error)
    {
        res.status(405).json({err:error.toString()})
    }
});


//############################# SIGNUP ##########################################""""

router.post("/sign-up",(req,res)=>{
    console.log("from front end", req)
    try
    {
        const newUser = new User({
            username: req.body.username,
            email:req.body.email,
            telephone: req.body.telephone,
            password: req.body.password,
        });
        if(req.body.userRole){
            newUser.userRole = req.body.userRole
        }

        newUser.save().then(user=>{
            const token = createToken(user).ACCESS_TOKEN;
            const userTokens ={accessToken: token};
            res.cookie("accessjwt", token, {maxAge:maxAgeAccessToken*1000, path:"/",});
            res.status(200).json({user:user._id, username:user.username, email:user.email, role: user.role,...userTokens, success: true});

        }).catch(err=>{
            console.log(err)
            if(err.code === 11000){
                const error = Error(` ${Object.keys(err.keyValue)}  d'utilisateur ${err.keyValue[Object.keys(err.keyValue)[0]]} non disponible`);
                res.status(400).json({err: error.message.toString(), success: false});
            }
           
        });
    }
    catch (error)
    {
        res.status(401).json({err:error.toString()});
    }

});



router.get("/users",verifyToken,(req,res)=>{
    try
    {
        User.find({})
            .then(users=>{
                    res.status(200).json(users);
                }).catch(err=>{
                    res.status(400).json(err);
                });
    }
    catch (error)
    {
        res.status(400).json({err:error.toString()});
    }

});

router.get("/admin-users",verifyToken, (req,res)=>{
    if (req.isAdmin) {
        try
        {
            User.find({userRole:'admin'})
                .then(users=>{
                        res.status(200).json(users);
                    }).catch(err=>{
                        res.status(400).json(err);
                    });
        }
        catch (error)
        {
            res.status(400).json({err:error.toString()});
        }
    } else {
        res.status(403).send('You are not authorized to acess this resource')
    }

});
router.delete("/admin-users/:userId",verifyToken, (req,res)=>{
    console.log(req.params.userId)
    if (req.isAdmin) {
        try
        {
            User.findByIdAndRemove({_id:req.params.userId})
                .then(()=>{
                        res.status(200);
                    }).catch(err=>{
                        res.status(400).json(err);
                    });
        }
        catch (error)
        {
            res.status(400).json({err:error.toString()});
        }
    } else {
        res.status(403).send('You are not authorized to acess this resource')
    }

});


router.post("/user/edit/:user_id",(req,res)=>{
    try
    {
        User.findOne({_id:req.params.user_id}, function(err, user){
            if(err) {
                res.status(500).send(err);
            } else {
                if(req.body.password && req.body.password !== ''){
                    user.password = req.body.password;
                }
                user.save((err)=>{
                    if(err){}
                    else{
                        res.status(200).send({user, success:true});
                    }
                })
                
            }
         });
    }
    catch (err)
    {
        if(err.code === 11000){
            const error = Error(` ${Object.keys(err.keyValue)}  d'utilisateur ${err.keyValue[Object.keys(err.keyValue)[0]]} non disponible`);
            res.status(400).json({err: error.message.toString(), success: false});
        }
    }

});
router.post("/user/edit/admin/:user_id",(req,res)=>{
    try
    {  
      User.findOne({_id:req.params.user_id}, function(err, user){
        if(err) {
            res.status(500).send(err);
        } else {
            user.email = req.body.email;
            user.username =  req.body.username;
            if(req.body.password && req.body.password !== ''){
                user.password = req.body.password;
            }
            user.save((err)=>{
                if(err){}
                else{
                    res.status(200).send({user, success:true});
                }
            })
            
        }
     });

    }
    catch (error)
    {
        res.status(400).json({err:error.toString()});
    }

});



// password reset



module.exports = router;
