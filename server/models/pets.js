'use strict'


var models = require("../models");
module.exports = function (sequelize, DataTypes) {


  var Pet = squelize.define('Pet', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      allowNull: false
    },

    name : {
      type : DataTypes.STRING,
      allowNull: false
    },

    birthday : {
      type: DataTypes.DATEONLY
    },

    weight : {
      type: DataTypes.INTEGER
    },

    height : {
      type : DataTypes.INTEGER
    },

    owner_id : {
      type : DataTypes.INTEGER,

      references : {
        model : 'Users',
        key : 'id'
      }
    },
    specie_id : {
      type : DataTypes.INTEGER,

      references : {
        model : 'Species',
        key : 'id'
      }
    },

    hair : {
      type : DataTypes.STRING
    },

    tail : {
      type : DataTypes.STRING
    }
    }, {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    });

    return Pet;
  });

};
