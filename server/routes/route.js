var rootController = require('../controllers/root'),
    userController = require('../controllers/user'),
    tagController = require('../controllers/tag'),
    checkoAuth = require('middleware/checkAuth'),
    passport = require('passport');

var middleware = [checkoAuth];

module.exports = function(app) {
    app.get('/', rootController.home);

    //user
    app.get('/api/user/confirmation/:id', userController.confirmation);
    app.post('/api/user/signup', userController.signup);
    app.post('/api/user/signin', passport.authenticate('local', {}), userController.signin);
    app.get('/api/user/logout', userController.logout);

    //tag
    app.post('/api/tag/create', middleware, tagController.create);
    app.get('/api/tag/get', middleware, tagController.get);
    app.post('/api/tag/edit', middleware, tagController.edit);
    app.post('/api/tag/remove', middleware, tagController.remove);

}