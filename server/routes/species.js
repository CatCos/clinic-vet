var express = require('express');
var router = express.Router();
var models = require("../models");
var species = require("../handlers/species.js");

router.get('/getAll', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
