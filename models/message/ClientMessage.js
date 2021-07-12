const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientMessageSchema = new Schema({
  name: {type:String,  required:[true, 'Please provide the senders name']},
  email:{ type:String, default:"none"},
  subject: {type:String},
  body:{type:String},
  date:{type:Date, default:Date.now()}
});


module.exports = mongoose.model('ClientMessage',ClientMessageSchema);