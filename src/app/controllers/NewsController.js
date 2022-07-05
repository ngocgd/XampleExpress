const client = require('../../connection-redis')

class NewsController {
  async index(req, res) {
    res.render('new',{token : await client.get('62bac182806e889b051dafa5')});
  }

  show(req, res) {
    res.send('news details');
  }
}

module.exports = new NewsController();
