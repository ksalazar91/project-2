var db = require("../models");

module.exports = function(app) {
  // Get all players
  app.get("/api/players", function(req, res) {
    db.Profile.findAll({}).then(function(players) {
      res.json(players);
    });
  });

  // Create a new player
  app.post("/api/players", function(req, res) {
    db.Profile.create(req.body).then(function(players) {
      res.json(players);
    });
  });

  // Delete an player by id
  app.delete("/api/players/:id", function(req, res) {
    db.Profile.destroy({ where: { id: req.params.id } }).then(function(players) {
      res.json(players);
    });
  });
};
