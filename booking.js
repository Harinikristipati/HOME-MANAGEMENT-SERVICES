const express = require('express');
const router = express.Router();
const Booking = require('../Model/booking.model');

// Create a new booking
router.post('/', (req, res) => {
  const { Name, MobileNo, Location, Service, Email } = req.body;
  
  // Create a new booking document
  const newBooking = new Booking({
    Name,
    MobileNo,
    Location,
    Service,
    Email,
  });
  
  // Save the booking to the database
  newBooking.save()
    .then(() => {
      res.status(201).json({ message: 'Booking created successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the booking' });
    });
});

module.exports = router;