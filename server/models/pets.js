'use strict'

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
        model : User,
        key : 'id'
      }
    },
    specie_id : {
      type : DataTypes.INTEGER,

      references : {
        model : Specie,
        key : 'id'
      }
    },

    hair : {
      type : DataTypes.STRING
    },

    tail : {
      type : DataTypes.STRING
    }
  });

};
