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


/*
router.post('/', verifyToken, async (req, res) => {
    console.log(req.user);
    let orderList = req.body.productOrders;
    let user = req.body.user;
    orderList.forEach(element => {
        let productId = element._id;
        let quantityOrdered = element.quantity;
        let colorOrdered = element.selectedProductColor;
        let sizeOrdered = element.selectedProductSize;
        let quantityOnserved = 0;
        let validQuantity = 0;

        //    compute order
        Products.findOne({_id: productId})
            .then(product => {
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


                let newOrder = Order({
                    product: {
                        productRef: productId,
                        productVariation: {
                            color: product.variation[variationIndex].color,
                            sizeStock: validQuantity,
                            sizeName: product.variation[variationIndex].size[productSizeVariation].name || ""
                        }
                    },
                    deliveryStatus: false,
                    isPayed: false,
                });
                if (user) {
                    newOrder.user = user;
                }

                let newTransaction = Transaction({
                    user: {
                        name: req.body.name,
                        email: req.body.email,
                        country: req.body.country,
                        city: req.body.city
                    },
                    paymentDetails:
                        {
                            paymentMethod: req.body.paymentDetails.channel_name ? req.body.paymentDetails.channel_name : "Credit-Card",
                            amountPayedCFA: validQuantity * product.price,
                            cardDetails:
                                {
                                    name: req.body.paymentDetails.name ? req.body.paymentDetails.name : "",
                                    number: req.body.paymentDetails.number ? req.body.paymentDetails.number : "",
                                },
                            mobileDetails:
                                {
                                    name: req.body.paymentDetails.channel_name ? req.body.paymentDetails.channel_name : "",
                                    number: req.body.paymentDetails.phonenumber ? req.body.paymentDetails.phonenumber : 0
                                }
                        },
                })
                    .save()
                    .then(transaction => {
                        newOrder.paymentStatus = transaction;
                        newOrder.isPayed = true
                        newOrder.save()
                            .then(order => {
                                product.orderHistory ? product.orderHistory.push(order) : product.orderHistory = [order];
                                product.save()
                                    .then(product => {
                                        try {
                                            let message = {
                                                newOrder: order,
                                                transawction: transaction,
                                                variations: order.product.productVariation.toString()
                                            }
                                            sendEmail('ngumbukafon@gmail.com', JSON.stringify(message).toString())
                                        } catch (error) {
                                            console.log(error)
                                        }
                                        res.json({sucess: true, product: product})
                                    });
                            });
                    })
                    .catch(err => {
                        res.json({sucess: false, error: "Payment unhandled"});
                    });

            });

    });
});
*/


router.post('/', async (req, res) => {
   /* Order.collection.dropIndexes(function (err, results) {
        // Handle errors
    });*/

    let orderList = req.body.productOrders;
    let user = await User.findById(req.body.id)
    /* name: name,
            country: country,
            city: city,
            paymentDetails: paymentDetails,
            productOrders: cartItems,
            id: user.userid,
            currency: currency.currencySymbol*/
    let mainOrder = {
        products: [], user, paymentStatus: null, isPayed: false, deliveryStatus: false, currency: req.body.currency,
        country: req.body.country, name: req.body.name, city: req.body.city,amount:req.body.amount
    };
    let order = new Order(mainOrder);
    order = await order.save();
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
        console.log("productRef", productId)
        let totalPrice = ((product.price - product.salePrice) * validQuantity);
        totalAmount += totalPrice;
        mainOrder.products.push({
            productRef: product,
            productVariation: {
                color: product.variation[variationIndex].color,
                sizeStock: validQuantity,
                sizeName: product.variation[variationIndex].size[productSizeVariation].name || "",
                unitPrice: (product.price - product.salePrice),
                totalPrice
            }
        })
        product.orderHistory ? product.orderHistory.push(order._id) : product.orderHistory = [order._id];
        await product.save()

    }
    order.products = mainOrder.products;
    // order.amount = mainOrder.amount;
    order = await order.save();
    /*   let totalAmount = 0 ;
 /*    mainOrder.products.forEach(productRefVar=>{
           console.log("pprodci",productRefVar)
           totalAmount+=((productRefVar.productRef.price-productRefVar.productRef.salePrice)*productRefVar.productVariation.sizeStock)
       })*/
    // mainOrder.totalAmount=mainOrder;
    // console.log(mainOrder.totalAmount)
    mainOrder._id = order._id;
    console.log(order._id)
    // sendEmail('Title', JSON.stringify({...order}).toString(),'tclarencek@gmail.com')
    res.status(200).send(mainOrder)
//
});
/*   let newTransaction = Transaction({
               user: {
                   name: req.body.name,
                   email: req.body.email,
                   country: req.body.country,
                   city: req.body.city
               },
               paymentDetails:
                   {
                       paymentMethod: req.body.paymentDetails.channel_name ? req.body.paymentDetails.channel_name : "Credit-Card",
                       amountPayedCFA: validQuantity * product.price,
                       cardDetails:
                           {
                               name: req.body.paymentDetails.name ? req.body.paymentDetails.name : "",
                               number: req.body.paymentDetails.number ? req.body.paymentDetails.number : "",
                           },
                       mobileDetails:
                           {
                               name: req.body.paymentDetails.channel_name ? req.body.paymentDetails.channel_name : "",
                               number: req.body.paymentDetails.phonenumber ? req.body.paymentDetails.phonenumber : 0
                           }
                   },
           })
               .save()
               .then(transaction => {

               })
               .catch(err => {
                   res.json({sucess: false, error: "Payment unhandled"});
               });
*/

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

// user transactions
router.get('/transactions/:user_id', async (req, res) => {
    /*let orders = await Order.find({user: req.params.user_id});
    let orderIds = [];
    orders.forEach(order=>{
        orderIds.push(order._id);
    })*/
    let transactions = await ProductTransactionsNew.find({user: req.params.user_id}).populate("order").populate('paymentStatus').populate('user')
    /*orders = JSON.parse(JSON.stringify(orders));
    for (let i=0;i<orders.length;i++){
        let order = orders[i];
       for(let j=0;j<)
        order.
        orders.splice(i,1,order)
    }*/
    res.status(200).send(transactions)
});


// all transactions admin
router.get('/transactions/information/admin', async (req, res) => {
    let transactions =await ProductTransactionsNew.find({}).populate('order').populate('user')
    res.status(200).send(transactions)
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