const express = require('express');
 const router = express.Router();
 const SpecialOrder = require('../../models/Orders/SpecialOrder');
 const axios = require('axios');
 const User = require('../../models/Users/User');
 const { verifyToken } = require('../../helpers/authentication');
 const Transaction = require('../../models/Transactions/Transactions');

// ############################ SPECIAL ORDERS ########################################""

router.get('/',verifyToken, (req, res) => {
    if(req.isAdmin)
    {
        SpecialOrder.find({})
        .then(
            order => {    
                    console.log("err")
                    res.status(200).json(order);
                }
        ).catch(err=>{
            console.log(err);
            res.status(400).send("Can't get special orders")
        });
    }
    else
    {
        res.status(403).send('You are not authorized to acess this resource')
    }
});

router.get('/single/:user',verifyToken, (req, res) => {
        SpecialOrder.find({"user.user":req.params.user})
        .populate({
            path: 'user',
            populate:{
                path:'user',
                model: User}})
        .populate({
            path: 'paymentStatus',
            model: Transaction})
        .then(specialOrders => {    
                    res.status(200).json(specialOrders);
                }
        ).catch(err=>{
            console.log(err);
            res.status(400).send("Can't get special orders")
        });
});



router.post('/', (req, res) => {
  /*  SpecialOrder.collection.dropIndexes(function (err, results) {
        // Handle errors
    });*/
    SpecialOrder({
        productMeasures:{
            epaule: req.body.epaule,
            poitrine: req.body.poitrine,
            taille:req.body.taille,
            bassin:req.body.bassin,
            tourDeManche: req.body.tourDeManche,
            longueurManche: req.body.longueurManche,
            longueurHaut: req.body.longeurPantalon,
            hanche:req.body.hanche,
            cuisse:req.body.cuisse,
            fond: req.body.fond,
            mollet: req.body.mollet,
            pied: req.body.pied,
            longeurPantalon:req.body.longeurPantalonRobe
        }, 
        user :{
            user: req.body.user || "60ef0636cda95ec7be91a035",
            name:req.body.name,
            country:req.body.country,
            city:req.body.city,
            telephone:req.body.telephone,
            gender:req.body.gender,
            email:req.body.email
        }})
        .save()
            .then(order => {
                console.log("in order")
                order.deliveryStatus = false;
                order.save().then(newOrder=>{
                    res.status(200).json(newOrder);
                });
            }
        ).catch(err=>{
            console.log(err);
            res.status(400).send("Can't get sssproduct order History")
        });
    });


router.patch('/:special_order_id', verifyToken, (req, res) => {
    if(req.isAdmin)
    { SpecialOrder.findOne({_id:req.params.special_order_id})
            .then(order => {
                order.cost = req.body.cost;
                order.save().then(newOrder=>{
                    res.status(200).json(newOrder);
                });
            }
        ).catch(err=>{
            console.log(err);
            res.status(400).send("Can't get product order History")
        });
    }
    else
    {
        res.status(403).send('You are not authorized to acess this resource')
    }
});

router.patch('/delivery-status/:special_order_id',verifyToken, (req, res) => {
    if(req.isAdmin)
    {SpecialOrder.findOne({_id:req.params.special_order_id})
        .then(order => {
            order.deliveryStatus =  !order.deliveryStatus;
            order.save().then(newOrder=>{
                res.status(200).json(newOrder);
            });
        }
    ).catch(err=>{
        console.log(err);
        res.status(400).send("Can't get special product order History")
    });
    }
    else
    {
        res.status(403).send('You are not authorized to acess this resource')
    }
});
router.delete('/delivery-status/:special_order_id',verifyToken, (req, res) => {
    if(req.isAdmin)
    {SpecialOrder.findOneAndDelete({_id:req.params.special_order_id})
        .then( delVal => res.status(200).json( {delationStatus:true, deleted:delVal}))
    .catch(err=>{
        res.status(400).send("Can't get product order History")
    });
    }
    else
    {
        res.status(403).send('You are not authorized to acess this resource')
    }
});






module.exports = router;