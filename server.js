var express = require('express'),
    bodyParser = require('body-parser'),
    hbs = require('hbs'),
    app = express();

app.use(bodyParser());

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'html');
app.set('views', __dirname + '/views/pages');
app.engine('html', hbs.__express);

app.use(express.static(__dirname + '/public', {maxAge: 86400000}));

require(__dirname + '/routes')(app);

var server = app.listen(3000, function () {
    console.log('Your server goes on localhost:', server.address().port);
});
