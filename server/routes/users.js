'use strict'

const express = require('express');
const router = express.Router();
const models = require("../models");
const users = require("../handlers/users.js");

// Get the information of all users
router.get('/', (req, res) => {
  users.all(res)

});

// Add new user
router.post('/new', (req, res) => {

  users.new(req, res);

});

// Get information of a specific user
router.get('/:id', (req, res) => {
  let response = users.find(req.params.id, res)

})


router.put('/update/:id', (req, res) => {

  users.update(req.params.id, req, res)

});

router.delete('/delete/:id', (req, res) => {
  users.delete(req.params.id, res);

})
module.exports = router;
