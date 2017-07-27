const models = require('../../models');
const serialModel = models.test.otsSerials;
const numsModel = models.test.otsNumbs;
const listModel = models.test.list;
const itemsModel = models.test.items;
const async = require('async');

module.exports = {
  numAndSerial: numAndSerial,
  list: list,
  items: items
};

function numAndSerial (req, res, next) {
  let numOrSerial = true;
  async.each(req.body.nums, loop, end);

  function loop (each, callbackLoop) {
    let newEntry = blaModel(req.body.ot, each);

    newEntry.save(function (err, results) {
      if (err) return callbackLoop(err);
      callbackLoop();
    });
  }

  function end () {
    numOrSerial = false;
    async.each(req.body.serials, loop, endSerial);
  }

  function endSerial () {
    res.status(200).send();
  }

  function blaModel (ot, param1) {
    return numOrSerial
    ? numsModel({OT: ot, Num: param1})
    : serialModel({OT: ot, serial: param1});
  }
}

function list (req, res, next) {
  let newEntry = listModel({
    OT: req.body.ot,
    num: req.body.num,
    serial: req.body.serial,
    mac: req.body.mac,
    item: req.body.item
  });

  newEntry.save(function (err, results) {
    if (err) return res.status(500).json(err);
    numsModel.findOneAndRemove({Num: req.body.num}, function (err, nums) {
      if (err) return res.status(500).json(err);
      serialModel.findOneAndRemove({serial: req.body.serial}, function (err, serials) {
        if (err) return res.status(500).json(err);
        res.status(200).json([results, nums, serials]);
      });
    });
  });
}

function items (req, res, next) {
  let newEntry = itemsModel({
    item: req.body.item
  });

  newEntry.save(function (err, results) {
    if (err) return res.status(500).json(err);
    res.status(200).json(results);
  });
}
