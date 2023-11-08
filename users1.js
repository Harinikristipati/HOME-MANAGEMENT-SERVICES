var express = require('express');
var router = express.Router();
var userModel1 = require('../Model/user.model1');

router.post('/', (req, res) => {
  let newUser = new userModel1({
    Name: req.body.Name,
    MobileNo: req.body.MobileNo,
    Location: req.body.Location,
    service: req.body.service,
    DateandTime: req.body.DateandTime,
    email: req.body.email,
  });

  newUser.save()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});
router.get('/', (req, res) => {
  userModel1.find()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

// Update a user by ID
router.put('/:id', (req, res) => {
  userModel1.findByIdAndUpdate(req.params.id, {
    Name: req.body.Name,
    MobileNo: req.body.MobileNo,
    Location: req.body.Location,
    service: req.body.service,
    DateandTime: req.body.DateandTime,
    email: req.body.email,
  })
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
  userModel1.findByIdAndRemove(req.params.id)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
