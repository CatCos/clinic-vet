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

  }).then((user) =>
  {
    res.json( {"error" : false, "message" : "success", "data" : "USER INSERTED"});
  });
};

/**
 * Returns all users that exist into the database
**/
module.exports.all = (res) =>
{
  let users = [];
  models.user.findAll().then((results) =>
  {
    for (let i = 0; i < results.length; i++) {
      let user = results[i]
      let info = user.dataValues
      users.push(
        info
      )
    }
    res.send(users);
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
/**
 * Deletes the specified user from the database
**/
module.exports.delete = (user_id, res) => {

    models.user.destroy({
      where:
      {
        id : user_id
      }
    }).then((results) => {

        res.json( {"error" : false, "message" : "success", "data" : "USER DELETED"});
    });
};


/**
 * Updates the information of the specified user
 **/
module.exports.update = (user_id, data, res) => {
  models.user.update(
    {
      firstName : data.body.firstName
    }, {
    where : {
      id : user_id
    }
  }).then((results) => {

    res.json({"error" : false, "message" : "success", "data" : "USER UPDATED"});

  });
};
