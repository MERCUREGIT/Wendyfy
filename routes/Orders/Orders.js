const express = require('express');
const router = express.Router();
const Products = require('../../models/Products/Product');
const Order = require('../../models/Orders/Orders');
const User = require('../../models/Users/User');

const ProductTransactionsNew = require('../../models/Transactions/Transactions.new');
const Transaction = require('../../models/Transactions/Transactions');
const {sendEmail} = require('../../helpers/mail-sender');
const axios = require('axios');
const {verifyToken} = require('../../helpers/authentication');


router.get('/signature', (req, res)=>{
    const mongoose = require('mongoose');
    let signatureID = new mongoose.Types.ObjectId();
    res.status(200).json({_id:signatureID, status: "success"})
})

router.post('/notify', async (req, res) => {
   console.log(req.body);
});

router.post('/', async (req, res) => {
    let orderList = req.body.productOrders;
    let paymentInfo = {...req.body.paymentDetails};

    if(req.body.id){ paymentInfo.user = req.body.id;}
    else{paymentInfo.user = '60ef0636cda95ec7be91a035';}

    let mainOrder = {_id:req.body.signature, products: [], paymentStatus: null, deliveryStatus: false,country: req.body.country, name: req.body.name, city: req.body.city };

    let totalAmount = 0;
    for (let i = 0; i < orderList.length; i++) {
        let element = orderList[i];
        let productId = element._id;
        let quantityOrdered = element.quantity;
        let colorOrdered = element.selectedProductColor;
        let sizeOrdered = element.selectedProductSize;
        let quantityOnserved = 0;
        let validQuantity = 0;
        //    compute order
        let product = await Products.findOne({_id: productId});
        let variationIndex = product.variation.findIndex(productVariation => productVariation.color === colorOrdered)
        let productSizeVariation = product.variation[variationIndex].size.findIndex(sizeVariation => sizeVariation.name = sizeOrdered);
        let productSizeStockVariation = product.variation[variationIndex].size[productSizeVariation].stock
        if (productSizeStockVariation != 0 && productSizeStockVariation >= quantityOrdered) {
            product.variation[variationIndex].size[productSizeVariation].stock = productSizeStockVariation - quantityOrdered;
            validQuantity = quantityOrdered
        } else if (productSizeStockVariation != 0 && productSizeStockVariation <= quantityOrdered) {
            let initialQuantity = productSizeStockVariation;
            quantityOnserved = Math.abs(initialQuantity - quantityOrdered);
            validQuantity = initialQuantity
            product.variation[variationIndex].size[productSizeVariation].stock = 0;
        }
        let totalPrice = ((product.price - product.salePrice) * validQuantity);
        totalAmount += totalPrice;
        mainOrder.products.push({
            productRef: product,
            productVariation: {
                color: product.variation[variationIndex].color,
                sizeStock: validQuantity,
                sizeName: product.variation[variationIndex].size[productSizeVariation].name || "",
                unitPrice: (product.price - product.salePrice),
                totalPrice }})
        // product.orderHistory ? product.orderHistory.push(order._id) : product.orderHistory = [order._id];
        product.saleCount += validQuantity;
        await product.save()
    }
    let order = await new Order({...mainOrder}).save();
    let newTransaction = new Transaction({orderInfo:order ,...paymentInfo}).save().then(data=>{
        order.paymentStatus = data;
        order.save()
        // sendEmail('Nouvelle commande', JSON.stringify({...order}).toString(),'ngumbukafon@gmail.com')
        res.status(200).send(mainOrder)
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err)
    });

});

router.get('/single/:prouct_id', (req, res) => {
    let productId = req.params.product_id;
    Products.findOne({_id: productId})
        .populate('orderHistory')
        .then(
            product => {
                res.status(200).json(product.orderHistory);
            }
        ).catch(err => {
        console.log(err);
        res.status(400).send("Order history not available")
    });
});

router.get('/:status', (req, res) => {

    Order.find({deliveryStatus: req.params.status})
        .populate('paymentStatus').populate({
        path: 'products', populate: {
            path: 'productRef',
            model: 'Product'
        }
    })
        .populate('user')
        .then(
            orders => {
                res.status(200).json(orders);
            }
        ).catch(err => {
        console.log(err);
        res.status(400).send("Order history not available")
    });
});


// toggle delivery status
router.patch('/:product_id', verifyToken, (req, res) => {
    if (req.isAdmin) {
        Order.findOne({_id: req.params.product_id})
            .then(
                order => {
                    order.deliveryStatus = true;
                    order.save().then(newOrder => {
                        res.status(200).json(newOrder);
                    });
                }
            ).catch(err => {
            console.log(err);
            res.status(400).send("Can't get product order History")
        });
    } else {
        res.status(403).send('You are not authorized to acess this resource')
    }
});



// toggle delivery status
router.get('/user/:user_id', async (req, res) => {
    let orders = await Order.find({user: req.params.user_id}).populate({
        path: 'products', populate: {
            path: 'productRef',
            model: 'Product'
        }
    });
    /*orders = JSON.parse(JSON.stringify(orders));
    for (let i=0;i<orders.length;i++){
        let order = orders[i];
       for(let j=0;j<)
        order.
        orders.splice(i,1,order)
    }*/
    res.status(200).send(orders)
});




// // user transactions
// router.get('/transactions/:user_id', async (req, res) => {
//     /*let orders = await Order.find({user: req.params.user_id});
//     let orderIds = [];
//     orders.forEach(order=>{
//         orderIds.push(order._id);
//     })*/
//     let transactions = await ProductTransactionsNew.find({user: "req.params.user_id"}).populate("order").populate('paymentStatus').populate('user')
//     /*orders = JSON.parse(JSON.stringify(orders));
//     for (let i=0;i<orders.length;i++){
//         let order = orders[i];
//        for(let j=0;j<)
//         order.
//         orders.splice(i,1,order)
//     }*/
//     res.status(200).send(transactions)
// });


router.get('/transactions/:user_id', async (req, res) => {
    let transactions = await Transaction.find({user: req.params.user_id}).populate({
        path: 'orderInfo',
        model: Order,
        populate: {
            path: 'products',
            populate:{
                path:'productRef',
                model: Products
            }
        }
    });
    res.status(200).send(transactions)
});






// all transactions admin
router.get('/transactions/information/admin',verifyToken, async (req, res) => {
    let transactions =await Transaction.find({})
        .populate({
            path: 'orderInfo',
            model: Order,
            populate: {
                path: 'products',
                populate:{
                    path:'productRef',
                    model: Products
                }}})
        .populate('user')
    res.status(200).send(transactions)
});

router.patch('/delivery-status/:order_id',verifyToken, async (req, res) => {
   Order.findOne({_id:req.params.order_id})
    .then(order=>{
        order.deliveryStatus = !order.deliveryStatus;
        order.save()
        .then(doc=>res.status(200).send(order))})
    .catch(err=>res.status(500).send(err))

});


// create positive transaction
router.post('/transactions/cptx/:user_id/:order_id', verifyToken, async (req, res) => {
   console.log("hello world")
    let order = await Order.findById(req.params.order_id).populate('paymentStatus');
    if (order.paymentStatus && order.paymentStatus.completed) {
        return res.status(200).send({message: "Already completed a payment for this order"})
    }
    order.isPaid = true;
    let transaction = new ProductTransactionsNew({
        user: req.params.user_id,
        order: req.params.order_id,
        paymentMetaData: req.body.paymentMetaData,
        amount: req.body.amount,
        completed: true
    })
    await transaction.save();
    await order.save();
    res.status(200).send(transaction)
});





// ipn update
router.post('/transactions/ipn-update', verifyToken, async (req, res) => {
    console.log(req.body);
});



// create negative transaction
router.post('/transactions/cntx/:user_id/:order_id', async (req, res) => {
    let order = await Order.findById(req.params.order_id).populate('paymentStatus');
    if (order.paymentStatus && order.paymentStatus.completed) {
        return res.status(200).send({message: "Already completed a payment for this order"})
    }
    order.isPaid = false;
    let transaction = new ProductTransactionsNew({
        user: req.params.user_id,
        order: req.params.order_id,
        paymentMetaData: req.body.paymentMetaData,
        amount: req.body.amount
    })
    // paymentStatus
    order.paymentStatus = transaction;
    await transaction.save();
    await order.save();
    res.status(200).send(transaction)
});


module.exports = router;