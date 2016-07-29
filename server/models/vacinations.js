'use strict'

module.exports = function(sequelize, DataTypes) {
  const Vacionation = sequelize.define('vacination', {
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

    vacine_id : {
      type: DataTypes.INTEGER,
      allowNull: false,

      references : {
        model : 'vacines',
        key: 'id'
      }
    },

    weight : {
      type: DataTypes.DOUBLE
    },

    date  : {
      type : DataTypes.DATE,
      allowNull: false
    },


    obs : {type: DataTypes.TEXT}
  },{
       classMethods: {
         associate: function(models) {
           Vacionation.belongsTo(models.pet, {foreignKey: 'pet_id'})
           Vacionation.belongsTo(models.vacine, {foreignKey : 'vacine_id'})
         }
       }
  });

  return Vacionation
};
