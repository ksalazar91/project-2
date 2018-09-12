module.exports = function(sequelize, DataTypes) {

    var Stats = sequelize.define("playerStats", {

        attack: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        wins: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        loses: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
      
    });


    return Stats;
  };