module.exports = function (app) {
/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

  app.get('/', function (req, res, next) {
    res.render('carousel', { title: 'Grogan Burner Services'})
  })
}
