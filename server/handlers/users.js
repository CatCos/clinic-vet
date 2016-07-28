
var models = require("../models");
module.exports.addUser = function( req ) {

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

module.exports.getUsers = function(res) {
  var ret_project = {};
  models.User.findAll().then(function(users) {

      users.forEach(function (user) {
           ret_project={
               name:user.username,
               data:user.firstName,
               lastName: user.lastName
           }
         });


       res.send(ret_project);
    });
};
