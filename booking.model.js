const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  Name: String,
  MobileNo: String,
  Location: String,
  Service: String,
  Email: String,
});

const Booking = mongoose.model('Bookings', bookingSchema);

module.exports = Booking;