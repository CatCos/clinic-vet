'use strict'

module.exports = function(sequelize, DataTypes) {

  const Vacine = sequelize.define('vacine', {
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
    }}, {
      classMethods: {
        associate: function(models) {

          Vacine.hasMany(models.vacination, {foreignKey : 'vacine_id'})
          // associations can be defined here
        }
      }
  });

  return Vacine;
};
