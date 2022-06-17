const newsRouter = require('./new');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function routes(app) {
  // app.get('/new', (req, res) => {
  //     res.render('new');
  // })
    app.use('/new',newsRouter);
    app.use('/home', siteRouter);
    app.use('/courses',courseRouter);
}
module.exports = routes;
