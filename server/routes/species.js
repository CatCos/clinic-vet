'use strict'

const express = require('express');
const router = express.Router();
const models = require("../models");
const species = require("../handlers/species.js");

router.get('/all', (req, res, next) => {
  res.send('respond with a resource');
});


module.exports = router;
