var authUser = require('../controllers/authUser.js');

module.exports = function(app,passport){
    
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
}