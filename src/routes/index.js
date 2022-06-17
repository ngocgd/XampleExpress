const newsRouter = require('./new');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me')

function routes(app) {
  // app.get('/new', (req, res) => {
  //     res.render('new');
  // })
    app.use('/new',newsRouter);
    app.use('/home', siteRouter);
    app.use('/courses',courseRouter);
    app.use('/me',meRouter);
}
module.exports = routes;
