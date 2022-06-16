const newsRouter = require('./new');
const siteRouter = require('./site');

function routes(app) {
  // app.get('/new', (req, res) => {
  //     res.render('new');
  // })
    app.use('/new',newsRouter);
    app.use('/', siteRouter);
}
module.exports = routes;
