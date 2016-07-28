'use strict'

module.exports = function(sequelize, DataTypes) {
  var Surgery = sequelize.define('surgery', {

    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      allowNull: true,
      autoIncrement: true
    },
    
    pet_id : {
      type : DataTypes.INTEGER,
      allowNull: false,
      references : {
        model : 'pets',
        key : 'id'
      }
    },

    weight : {
      type: DataTypes.DOUBLE
    },

    date  : {
      type : DataTypes.DATE,
      allowNull: false
    },

    cost : {
      type : DataTypes.DOUBLE,
      allowNull: false
    },

    obs : {type: DataTypes.TEXT}
  });

  return Surgery;
};
