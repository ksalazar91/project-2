require("dotenv").config();
var express = require('express');
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser'); //extracts the body part and format it to JSON form

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

var passport   = require('passport'); //handle authentication 
var session    = require('express-session'); //handle authentication

//Middleware
//--------------------------------------------------------------------------------------------

//For bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session());

// Routes
require('./routes/auth.js')(app, passport);
require('./config/passport/passport.js')(passport, db.user);

//--------------------------------------------------------------------------------------------


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;