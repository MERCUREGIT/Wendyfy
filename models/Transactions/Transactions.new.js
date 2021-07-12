const mongoose = require('mongoose');
const axios = require('axios');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    paymentMetaData: {
        type: {}
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    order:{
        type: Schema.Types.ObjectId,
        ref: "Orders",
        required: true
    },
    amount:{
        type:Number,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
}, {timestamps: true});

module.exports = mongoose.model('ProductTransactionsNew', TransactionSchema);