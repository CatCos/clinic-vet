'use strict'
const models = require("../models");
const bcrypt = require('bcrypt');

module.exports.new = (req) =>
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
    // you can now access the newly created user via the variable user
    console.log("USER INSERTED")

    return {};
  })
};

module.exports.all = (res) =>
{
  let users = {};
  models.user.findAll().then((users) =>
  {
    res.json(users);
  });
};


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
      username: result.username,
      firstName: result.firstName,
      lastName: result.lastName,
      contact: result.contact,
      email: result.email,
      addres: result.address,
      zip_code: result.zip_code
    }
    
    res.json(response)

  });
};
