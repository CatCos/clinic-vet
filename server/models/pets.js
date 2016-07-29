'use strict'

module.exports = function (sequelize, DataTypes) {
  let Pet = sequelize.define('pet', {

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

    gender : {
      type : DataTypes.CHAR,
      allowNull: false
    },

    weight : {
      type: DataTypes.DOUBLE
    },

    height : {
      type : DataTypes.DOUBLE
    },

    owner_id : {
      type : DataTypes.INTEGER,

      references : {
        model : 'users',
        key : 'id'
      }
    },

    specie_id : {
      type : DataTypes.INTEGER,

      references : {
        model : 'species',
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
          Pet.belongsTo(models.specie, {foreignKey : 'specie_id'})
          Pet.belongsTo(models.user, {foreignKey: 'owner_id'})

          Pet.hasMany(models.consult, {foreignKey : 'pet_id'})
          Pet.hasMany(models.desparasitation, {foreignKey: 'pet_id'})
          Pet.hasMany(models.vacination, {foreignKey: 'pet_id'})
        }
      }
    });

    return Pet;
  };
