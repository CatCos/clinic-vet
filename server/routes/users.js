'use strict'

const express = require('express');
const router = express.Router();
const models = require("../models");
const users = require("../handlers/users.js");

router.get('/', (req, res) => {
  let response = users.all()

  res.json(response)

});

router.post('/new', (req, res) => {
  let response = users.new(req);



});


module.exports = router;
