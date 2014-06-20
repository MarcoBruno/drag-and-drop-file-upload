var indexController = require(__dirname + '/controller/indexController');

module.exports = function (app) {
    //Redirection
    app.get('/index.html', function (req, res) {
        res.redirect(301, '/');
    });

    //Routes
    app.get('/', indexController.get);
};
