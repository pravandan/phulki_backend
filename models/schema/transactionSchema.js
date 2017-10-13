var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var transactionModelSchema = new Schema({
  token : String,
  merchant : String,
  merchantName : String,
  mobile : String,
  amount : String,
  creationTimeStamp : Number,
  expireTimeStamp : Number,
  status : String,
  isPaid : Boolean,
});

module.exports = mongoose.model('transactionModel',transactionModelSchema);
