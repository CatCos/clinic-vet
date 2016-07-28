'use strict';

module.exports = function(sequelize, DataTypes) {
  var Specie = sequelize.define('Specie' , {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      allowNull : false,
      autoIncrement : true
    },
    description : {
      type : DataTypes.STRING,
      allowNull : false
    },
    hair : {
      type: DataTypes.STRING,
      allowNull : false
    },
    weight : {
      type: DataTypes.STRING,
      allowNull : false
    },
    height : {
      type: DataTypes.STRING,
      allowNull : false
    },
    obs : {
      type: DataTypes.TEXT,
      allowNull : true
    }
  });

    return Specie;
};
