const mongoose = require('mongoose');
const axios = require('axios');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    user: {
       name: {
           type:String,
           required:[true, "Please provide buyers name"]
       },
       email: {
        type:String,
       },
       country:{
           type:String,
           required:[true, "Please provide country"]
       },
       city:{
           type:String,
           required:[true,"Please provide your city"]
        }

    },
    date: {
        type: Date,
        default: Date.now()
    },
    paymentDetails:{
        paymentMethod:{
            type:String,
            default:'',
            // required: true
        },
        amountPayedCFA:{
            type: Number,
            required: true
        },

        cardDetails:{
           name: {
            type:String,
            default:""
           },
           number: {
            type:Number,
            default:0
           },
        },
        mobileDetails:{
            name: {
                type:String,
                default:""
            },
            number: {
                type:Number,
                default:0
            }
        }
        

    },
    
});
TransactionSchema.pre('save', async function(next){  

    if(this.paymentDetails.mobileDetails.number){
        await axios.post('https://api.monetbil.com/payment/v1/placePayment',{
            service:"ol3Pd8C3TXibdcH602rdx6cAIlK8YFrz",
            phonenumber:this.paymentDetails.mobileDetails.number,
            amount: this.paymentDetails.amountPayedCFA,
        },
        {headers:{"Content-Type":"application/json"}})
        .then(response=>console.log("service scucess",response))
        .catch(err=> {throw  err});
    }
    if(this.paymentDetails.cardDetails.number){
        // send a request here
        await axios.post('https://api.monetbil.com/payment/v1/placePayment',{
            service:"ol3Pd8C3TXibdcH602rdx6cAIlK8YFrz",
            phonenumber:this.paymentDetails.mobileDetails.number,
            amount: this.paymentDetails.amountPayedCFA,
        },
        {headers:{"Content-Type":"application/json"}})
        .then(response=>console.log("service scucess",response))
        .catch(err=> {throw  err});
    }

    next();
});

TransactionSchema.post('save', function(po){
    console.log(po.paymentDetails.amountPayedCFA)
})
module.exports =   mongoose.model('ProductTransactions', TransactionSchema);