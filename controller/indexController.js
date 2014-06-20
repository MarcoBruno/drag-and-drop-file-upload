var fs = require('fs'),
    seo = JSON.parse(fs.readFileSync(__dirname + '/seo/indexSeo.json'));

module.exports = {
    get: function (req, res) {
        res.render('index', { seo : seo });
    }
}
