const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrdersSchema = new Schema({

    products:[{
        productRef: {
            type:Schema.Types.ObjectId,
            required:true,
            ref:'Product'
        },
        productVariation:[
            {
            color: {type: String,
                required: true,},
            sizeName: {type: String,
                required: true,},
            sizeStock: {
                default:1,
                type:Number,
                required:true},
                price:{
                type:Number
                }
            }
        ],

    }],
    deliveryStatus:{
        default:false,
        type:Boolean,
        required:true,
    },
   
    date: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    isPayed: {
        type: Boolean,
        required: true
    },
    paymentStatus:{
        type:Schema.Types.ObjectId,
        ref:"ProductTransactionsNew",
    },
    currency:{
        type:String,
        required:true
    },

    country:{
        type:String,
    },
    city:{
        type:String,
    },
    name:{
        type:String,
    },
    amount:{
        type: Number,
        required:true
    }

});


module.exports = mongoose.model('Orders', OrdersSchema);