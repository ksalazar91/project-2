var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Stats.findAll({}).then(function(players) {
      res.render("index", {
        msg: "Welcome!",
        Stats: players
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Stats.findOne({ where: { id: req.params.id } }).then(function(players) {
      res.render("example", {
        Stats: players
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
