var authUser = require('../controllers/authUser.js');
var db = require("../models/user");

module.exports = function(app,passport){
    app.get("/", function(req, res) {
  
        res.render("index");
    });
    app.get("/index.html", function(req, res) {
  
        res.render("index");
    });
    app.get("/news.html", function(req, res) {
  
        res.render("news");
    });
   
    app.get("/api/players", function(req, res) {
        db.User.findAll({}).then(function(user) {
          res.json(user);
        });
      });
    
    app.get('/signup', authUser.signup);
    app.get('/signin', authUser.signin);
   
    
    app.post('/signup', passport.authenticate('local-signup',  { 
        successRedirect: '/dashboard',
        failureRedirect: '/signup'}
    ));
    
    app.get('/dashboard',isLoggedIn, authUser.dashboard);
    
    app.get('/logout',authUser.logout);
    
    app.post('/signin', passport.authenticate('local-signin',  { 
        successRedirect: '/dashboard',
        failureRedirect: '/signin'}
    ));


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
      });
}

