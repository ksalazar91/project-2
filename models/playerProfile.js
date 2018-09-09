module.exports = function(sequelize, DataTypes) {

    var Profile = sequelize.define("playerProfile", {

        id:{
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            primaryKey: true

        }, 
        name: DataTypes.STRING,
        Age: DataTypes.INTEGER,
        Gender: DataTypes.STRING,
        username: DataTypes.STRING,
        Species: DataTypes.STRING,
        email: DataTypes.STRING,
        pswd: DataTypes.STRING
      
    });
    return Profile;
  };
  