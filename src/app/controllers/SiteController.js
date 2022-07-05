const courses = require('../models/course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
  home(req, res) {
    // course.find({},function(err,courses){
    //     if(!err) {
    //         res.json(courses);
    //     }else{
    //         res.status(400).json({error : 'ERROR'});
    //     }
    // })
    courses.find({})
      .skip((req.params.page-1)*6)
      .limit(6)
      .then(courses =>{
        res.render('home',{
          courses : mutipleMongooseToObject(courses)
        });
      })
  }
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
