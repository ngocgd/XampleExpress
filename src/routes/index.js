const newsRouter = require('./new');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me')
const userRouter = require('./user')
const authRouter = require('./auth')

function routes(app) {
  // app.get('/new', (req, res) => {
  //     res.render('new');
  // })
    app.use('/new',newsRouter);
    app.use('/home', siteRouter);
    app.use('/courses',courseRouter);
    app.use('/me',meRouter);
    app.use('/user',userRouter)
    app.use('/authentication',authRouter)
}
module.exports = routes;
