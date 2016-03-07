var index = require('../controllers/index.server.controller.js');

module.exports = function(app) {
  app.get('/', index.render);
};
