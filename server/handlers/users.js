'use strict'
const models = require("../models");

module.exports.new = (req) => {

  models.User.create({
    username  : req.body.username,
    firstName : req.body.firstName,
    lastName  : req.body.lastName,
    contact   : req.body.contact,
    email     : req.body.email,
    address   : req.body.address,
    zip_code  : req.body.zip_code

  }).then(function(user) {
        // you can now access the newly created user via the variable user
        console.log("USER INSERTED")
  })
};

module.exports.all = () => {
  let users = {};
  models.User.findAll().then(function(users) {

      users.forEach(function (user) {
           users.push({
               name:user.username,
               data:user.firstName,
               lastName: user.lastName
           });
         });
      return users;
    });
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
