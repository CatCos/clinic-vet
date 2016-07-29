'use strict'

module.exports = function(sequelize, DataTypes) {
  const Desparasitation = sequelize.define('desparasitation', {
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

    obs : {type: DataTypes.TEXT
    }
  },{
       classMethods: {
         associate: function(models) {
           Desparasitation.belongsTo(models.pet, {foreignKey: 'pet_id'})
         }
       }
  });

  return Desparasitation
};
