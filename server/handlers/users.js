'use strict'
const models = require("../models");
const bcrypt = require('bcrypt');

/**
 * Insert new user
 **/
module.exports.new = (req, res) =>
{
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  models.user.create(
  {
    username: req.body.username,
    password : hash,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    contact: req.body.contact,
    email: req.body.email,
    address: req.body.address,
    zip_code: req.body.zip_code

  }).then(function(user)
  {
    res.json( {"error" : false, "message" : "success", "data" : "USER INSERTED"});
  });
};

/**
 * Returns all users that exist into the database
**/
module.exports.all = (res) =>
{
  let users = {};
  models.user.findAll().then((users) =>
  {
    res.json(users);
  });
};


/**
 * Returns information of a specific user
 **/
module.exports.find = (user_id, res) =>
{
  models.user.findOne(
  {
    where:
    {
      id: user_id
    }
  }).then((result) =>
  {

    let response = {
      username  : result.username,
      firstName : result.firstName,
      lastName  : result.lastName,
      contact   : result.contact,
      email     : result.email,
      address   : result.address,
      zip_code  : result.zip_code
    }

    res.json(response)

  });
};
