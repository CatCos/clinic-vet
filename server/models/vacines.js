'use strict'

module.exports = function(sequelize, DataTypes) {

  var Vacine = sequelize.define('vacine', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    description : {
      type : DataTypes.STRING,
      allowNull: false
    },

    for_animal : {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Vacine;
};
