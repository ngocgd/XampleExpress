const course = require('../models/course');

class SiteController {
  home(req, res) {
    // course.find({},function(err,courses){
    //     if(!err) {
    //         res.json(courses);
    //     }else{
    //         res.status(400).json({error : 'ERROR'});
    //     }
    // })
    course.find({},function(err,courses){
        if(!err) res.json(courses);
        res.status(400).json({error : 'ERROR!!!'});
    });
  }
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
