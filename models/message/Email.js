const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmailSchema = new Schema({
  from: {type:String, default: "ngumbukafon@gmail.com"},
  subject: {type:String},
  body:{type:String},
  date:{type:Date, default:Date.now()},
  isNewsletter:{
    type:Boolean,
    default:false
  },
  users:{
    type:[String],
    default:[]
  }
});


module.exports = mongoose.model('Emails',EmailSchema);
