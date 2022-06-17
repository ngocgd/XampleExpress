const courses = require('../models/course');
const {mongooseToObject} = require('../../util/mongoose');
const { nextTick } = require('process');

class CourseController {
  show(req, res,next) {
    courses.findOne({slug : req.params.slug})
    .then(course =>{
      res.render('courses/show',{
        course : mongooseToObject(course)
      });
    })
    .catch(error => next(error))
  }
  create(req,res,next){
    res.render('courses/create.hbs');
  }
  store(req,res,next){
    const formData = req.body;
    // req.body.slug = req.body.name;
    req.body.image = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`;
    var course = new courses(formData); 
    course.save()
    .then(() => res.redirect('/home'))
    .catch((err)=>next(err))
  }
}
module.exports = new CourseController();
