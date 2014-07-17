var rootController = require('../controllers/root'),
    userController = require('../controllers/user'),
    checkoAuth = require('middleware/checkAuth'),
    passport = require('passport');

var middleware = [checkoAuth];

module.exports = function(app) {
    app.get('/', rootController.home);

    app.get('/api/user/confirmation/:id', userController.confirmation);
    app.post('/api/user/signup', userController.signup);
    app.post('/api/user/signin', passport.authenticate('local', {}), userController.signin);
    app.get('/api/user/logout', userController.logout);
}