const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrdersBinSchema = new Schema({

    _id: Schema.Types.ObjectId,
    product:{
        productRef: {
            type:Schema.Types.ObjectId,
            required:true,
            ref:'Product'
        },
        productVariation:[
            {
            color: {type: String,
                required: true,
                unique:true},
            quantity:{default:1,
                type:Number,
                required:true
        },
    }
        ],
        
    }, 
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
        required: true
    },
    isPayed: {
        type: Boolean,
        required: true
    },
    paymentStatus:{
        type:Schema.Types.ObjectId,
        ref:"Transaction",
        unique:true
    }
});


module.exports = mongoose.model('DeletedOrders', OrdersBinSchema);