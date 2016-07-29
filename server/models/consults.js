'use strict'

module.exports = function (sequelize, DataTypes) {
  const Consult = sequelize.define('consult', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement : true
    },

    date : {
      type: DataTypes.DATE,
      allowNull: false
    },

    pet_id : {
      type : DataTypes.INTEGER,
      allowNull: false,

      references : {
        model : 'pets',
        key : 'id'

      }
    },

    type : {
      type : DataTypes.INTEGER,

      references : {
        model : 'type_consults',
        key : 'id'
      }
    },

    cost : {
      type: DataTypes.DOUBLE,
      allowNull: false
    },

    obs : { type : DataTypes.TEXT}
  },
    {
     classMethods: {
       associate: function(models) {
         Consult.belongsTo(models.pet, {foreignKey: 'pet_id'})
         Consult.belongsTo(models.type_consult, {foreignKey: 'type'})
       }
     }

  });

  return Consult

};
