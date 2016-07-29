'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {

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

    password : {
      type: DataTypes.STRING,
      allowNull: true
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

        User.hasMany(models.pet, {foreignKey: 'owner_id'})
        // associations can be defined here
      }
    }
  });
  return User;
};
