var express = require('express');
var Geocode = require('../models/revcode');

var router = express.Router();

router.get('/:latlng', (req, res) => {
  var latlng = req.params.latlng;

  Geocode.retrieveByLatlng(latlng, (err, geocode) => {
    if (err) 
      return res.json(err);
    return res.json(geocode);
  });
});

module.exports = router;