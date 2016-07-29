'use strict'

const express = require('express');
const router = express.Router();
const models = require("../models");
const users = require("../handlers/users.js");

// Get the information of all users
router.get('/', (req, res) => {
  let response = users.all(res)

});

// Add new user
router.get('/new', (req, res) => {
  let response = users.new(req);

});

// Get information of a specific user
router.get('/:id', (req, res) => {
  let response = users.find(req.params.id, res)

})


module.exports = router;
