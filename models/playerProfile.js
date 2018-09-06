const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
    var player = sequelize.define("Player", {
        id: {
            type: DataTypes.INTAGER, 
            autoIncrement: ture,
            primryKey: ture
        },
      name: DataTypes.STRING,
      Age: DataTypes.INTAGER,
      Gender: DataTypes.STRING,
      username: DataTypes.STRING,
      Species: DataTypes.STRING,
      email: DataTypes.STRING,
      pswd: DataTypes.STRING},
      {
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        }

    });
    return player;
  };