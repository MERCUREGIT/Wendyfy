const jwt = require('jsonwebtoken');
const RefreshToken = require("../models/Users/RefreshTokens")
require('dotenv').config();

module.exports = {

    userAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/')
    },
    tokenGenerator: function (user,TOKEN_SECRET,duration){
        if(duration) return jwt.sign(user, TOKEN_SECRET,{expiresIn:`${duration}`});
        else return jwt.sign(user, TOKEN_SECRET)
    },

    verifyToken:function (req, res, next){
        if(typeof req.headers['authorization'] !== 'undefined')
            {
            const bearerToken =  req.headers['authorization'].split(' ')[1];
            jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET,(err, verification_obj)=>
                {
                    if(err)
                    {
                        console.log(err)
                        res.status(403).json({status:"Forbiden", success:false});
                         res.redirect('/');
                        res.end();
                    }
                    else
                    {
                        req.user = verification_obj.user;
                        if( verification_obj.user.role ==="admin") {req.isAdmin= true;}
                        next();
                    }

                });

        } else if(req.cookies.accessjwt)
        {
            const bearerToken = req.cookies.accessjwt;
            jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET,function (err, verification_obj)
            { if(err)
                {
                jwt.verify(refreshjwt, process.env.REFRESH_TOKEN_SECRET,(err, refreshTokenVerification)=>
                    {
                        if(err) {
                            res.status(403).json({status:"Forbiden", success:false});
                            res.redirect('/')
                            res.end()
                        }
                        else
                        {
                            const token =  module.exports.tokenGenerator(refreshTokenVerification.user,process.env.ACCESS_TOKEN_SECRET,module.exports.maxAgeAccessToken)
                            res.cookie("accessjwt", token);
                            req.user = refreshTokenVerification.user;
                            if(refreshTokenVerification.user.role ==="admin"){ req.isAdmin= true};
                            next();
                        }
                    });
                }
             else
                {
                    if(user.role =="admin"){ req.isAdmin= true};
                    req.user = user;
                    next();
                }
            });
        }

        return;
    },
    logout:(req,res, next)=> {
        // check for  and clear cookie token
        const refreshjwt = req.cookies.refreshjwt;
        if(refreshjwt)
        {
            RefreshToken.findOne({token: refreshjwt}).then(token=>{
                if(token)
                {
                    token.remove();
                    res.cookie("accessjwt", '', {maxAge:0, httpOnly:true});
                    res.cookie("refreshjwt",'', {maxAge:0, httpOnly:true});
                    next();
                }
                else
                {
                    throw Error("Could not lougout User, because he is not loggedin");
                }
            }).catch(err=>{
                res.status(404).json({success:false, status:err});
                console.log(err);
            });
        }
        else
        {
            res.cookie("refreshjwt",'', {maxAge:0, httpOnly:true});
            res.cookie("accessjwt",'', {maxAge:0, httpOnly:true});
            next();
        }
    },
     maxAgeAccessToken : 60*60*60,
     maxAgeRefreshToken: 60*60*60
}




