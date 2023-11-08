const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  Name: String,
  MobileNo: Number,
  Location: String,
  Service: String,
  DateandTime: Date,
  Email: String,
});

const adminModel = mongoose.model('admin', adminSchema);

module.exports = adminModel;
