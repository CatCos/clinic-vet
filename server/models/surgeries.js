'use strict'

module.exports = function(sequelize, DataTypes) {
  const Surgery = sequelize.define('surgery', {

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
    type : {
      type: DataTypes.INTEGER,

      references : {
        model : 'type_surgeries',
        key : 'id'
      }
    },
    cost : {
      type : DataTypes.DOUBLE,
      allowNull: false
    },

    obs : {type: DataTypes.TEXT
    }
  },{
       classMethods: {
         associate: function(models) {
           Surgery.belongsTo(models.pet, {foreignKey: 'pet_id'})
           Surgery.belongsTo(models.type_surgery, {foreignKey : 'type'})
         }
       }
  });

  return Surgery;
};
