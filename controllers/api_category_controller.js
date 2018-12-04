var models = require('../models');

exports.index = function(req, res, next) {
  models.category.all().then(categories => {
    res.json({ categories: categories });
  });
};
