'use strict';

module.exports = function(sequelize, DataTypes) {
  const Specie = sequelize.define('specie' , {
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
    }}, {
      classMethods: {
        associate: function(models) {

          Specie.hasMany(models.pet, {foreignKey: 'specie_id'})
          // associations can be defined here
        }
      }
  });

    return Specie;
};
