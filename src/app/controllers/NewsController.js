class NewsController {
  index(req, res) {
    res.render('new');
  }

  show(req, res) {
    res.send('news details');
  }
}

module.exports = new NewsController();
