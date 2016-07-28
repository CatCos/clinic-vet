var express = require('express');
var router = express.Router();
var models = require("../models");
var users = require("../handlers/users.js");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/create', function(req, res) {
  users.addUser(req);

});

router.get('/getall', function(req, res) {
  users.getUsers(res)

});
module.exports = router;
