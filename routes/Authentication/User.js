const express = require('express');
const router = express.Router();
require('dotenv').config()
const Orders = require('../../models/Orders/Orders');
const SpecialOrders = require('../../models/Orders/SpecialOrder');

const mongoose = require('mongoose');

const { tokenGenerator, logout , maxAgeAccessToken , maxAgeRefreshToken} = require('../../helpers/authentication');

const User = require("../../models/Users/User")
const RefreshToken = require("../../models/Users/RefreshTokens")



const createToken= (user)=>{
    return {
        ACCESS_TOKEN: tokenGenerator({user},process.env.ACCESS_TOKEN_SECRET),
        REFRESH_TOKEN: tokenGenerator({user},process.env.REFRESH_TOKEN_SECRET),
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
            const refreshToken = createToken(user).REFRESH_TOKEN;

            RefreshToken({user: user._id ,token:refreshToken}).save()
            .then(savedToken=>{
                const userTokens ={
                    accessToken: token,
                    refreshToken
                };
                res.cookie("accessjwt", token, {maxAge:maxAgeAccessToken*1000})
                const orders={};
                Orders.find({user:user._id}).then(result=>{
                    orders.normal = result
                });
                SpecialOrders.find({user:user._id}).then(result=>{
                    orders.special = result
                })
                res.status(200).json({user:user._id, username: user.username, email:user.email, ...userTokens})
                  });
        }
        else
        {
            res.status(401).send("Invalid user account")
        }
    }
    catch (error)
    {
        console.log(error)
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
            password: req.body.password
        });

        newUser.save().then(user=>{
            const token = createToken(user).ACCESS_TOKEN;
            const userTokens ={
                accessToken: token,
                refreshToken: refreshToken
            };
            res.cookie("accessjwt", token, {maxAge:maxAgeAccessToken*1000, path:"/",});
            res.status(200).json({user:user._id, username:user.username, email:user.email, role: user.role,...userTokens});

        });
    }
    catch (error)
    {
        res.status(401).json({err:error.toString()});
    }

});

// password reset



router.get("/users",(req,res)=>{
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



// password reset



module.exports = router;
