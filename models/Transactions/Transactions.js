const mongoose = require('mongoose');
const axios = require('axios');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
        user: {
                type: Schema.Types.ObjectId,
                ref: 'users',
            },
        orderInfo:{
                type: Schema.Types.ObjectId,
                ref: "Orders",
                required: true
            },
        cpm_site_id: {type: String, default:""},
        signature: {type: String, default:""},
        cpm_amount:{type: String, default:""},
        cpm_trans_id: {type: String, default:""},
        cpm_custom: {type: String, default:""},
        cpm_currency: {type: String, default:""},
        cpm_payid: {type: String, default:""},
        cpm_payment_date: {type: String, default:""},
        cpm_payment_time: {type: String, default:""},
        cpm_error_message: {type: String, default:""},
        payment_method: {type: String, default:""},
        cpm_phone_prefixe: {type: String, default:""},
        cel_phone_num: {type: String, default:""},
        cpm_ipn_ack: {type: String, default:""},
        created_at: {type: String, default:""},
        updated_at:{type: String, default:""},
        cpm_result: {type: String, default:""},
        cpm_trans_status: {type: String, default:""},
        cpm_designation: {type: String, default:""},
        buyer_name: {type: String, default:""},
        cpm_trans_date: {type: String, default:""},
    }
    );


TransactionSchema.post('save', function(po){
    console.log(po.cpm_amount)
})
module.exports =   mongoose.model('ProductTransactions', TransactionSchema);