'use strict'

module.exports = function (sequelize, DataTypes) {
  const Type_Consult = sequelize.define('type_consult', {

    id : {
      type : DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement : true
    },
    description : {
      type : DataTypes.STRING,
      allowNull: false
    }
  },
      {
       classMethods: {
         associate: function(models) {
           Type_Consult.hasMany(models.consult, {foreignKey: 'type'})
         }
       }

  });

  return Type_Consult;

};
