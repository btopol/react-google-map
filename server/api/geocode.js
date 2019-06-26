var express = require('express');
var Geocode = require('../models/geocode');

var router = express.Router();

router.get('/:address', (req, res) => {
  var address = req.params.address;

  Geocode.retrieveByAddress(address, (err, geocode) => {
    if (err) 
      return res.json(err);
    return res.json(geocode);
  });
});

module.exports = router;
