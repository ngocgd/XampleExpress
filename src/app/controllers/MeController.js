const courses = require('../models/course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController {
  showAll(req, res,next) {
    courses.find({})
    .then(courses =>{
      res.render('me/list',{
        courses : mutipleMongooseToObject(courses)
      });
    })
  }
}
module.exports = new MeController();
