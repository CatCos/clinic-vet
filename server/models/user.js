'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },

    firstName : {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName : {
      type : DataTypes.STRING,
      allowNull : false
    },

    contact: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    zip_code :{type: DataTypes.STRING}

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
