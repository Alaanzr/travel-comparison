var index = require('../controllers/index.server.controller.js');

module.exports = function(app) {
  app.get('/', index.render);

  app.get('/config', function(req, res) {
    res.send(process.env.TRAVEL_API_KEY);
  });
};
