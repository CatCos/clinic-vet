'use strict'

module.exports = function (sequelize, DataTypes) {
  const Type_Surgery = sequelize.define('type_surgery', {

    id : {
      type : DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement : true
    },
    description : {
      type : DataTypes.STRING,
      allowNull: false
    },

    cost : {
      type: DataTypes.DOUBLE,
      allowNull : false
    },

    for_animal : {
      type: DataTypes.STRING
    }

  });

  return Type_Surgery;

};
