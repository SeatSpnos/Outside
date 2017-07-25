const models = require('../../models');
const serialModel = models.test.otsSerials;
const numsModel = models.test.otsNumbs;
const listModel = models.test.list;
const itemsModel = models.test.items;
const async = require('async');

module.exports = {
  allOt: allOt,
  list: list,
  items: allItems
};

function allOt (req, res, next) {
  let opts = {
    ot: req.params.ot
  };

  let tasks = [
    async.constant(opts),
    items,
    nums,
    serials
  ];

  async.waterfall(tasks, end);

  function end (err, params) {
    if (err) return res.status(500).json(err);
    res.status(200).json(params);
  }
}

function items (params, next) {
  itemsModel.find({}, function (err, items) {
    if (err) next(err);
    params.items = items;
    next(null, params);
  });
}

function nums (params, next) {
  numsModel.find({OT: params.ot}, function (err, nums) {
    if (err) next(err);
    params.nums = nums;
    next(null, params);
  });
}

function serials (params, next) {
  serialModel.find({OT: params.ot}, function (err, serials) {
    if (err) next(err);
    params.serials = serials;
    next(null, params);
  });
}

function list (req, res, next) {
  listModel.find({}, function (err, list) {
    if (err) return res.status(500).json(err);
    res.status(200).json(list);
  });
}

function allItems (req, res, next) {
  itemsModel.find({}, function (err, items) {
    if (err) return res.status(500).json(err);
    res.status(200).json(items);
  });
}
