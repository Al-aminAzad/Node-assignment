const houserouter = require('./house.routes');

module.exports = (app) => {
  app.use('/', houserouter);
};
