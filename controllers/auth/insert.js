const userModels = require('../../models').user;
const bcrypt = require('bcrypt-nodejs');

module.exports = function (req, res, next) {
  let newEntry = userModels({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    group: req.body.group,
    password: bcrypt.hashSync('password', null, null),
    provider: req.body.provider
  });

  newEntry.save(function (err, results) {
    if (err) return res.status(500).json(err);
    res.status(200).json(results);
  });
};
