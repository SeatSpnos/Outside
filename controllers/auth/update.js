const userModels = require('../../models').user;
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  password: password,
  user: user
};

function password (req, res, next) {
  let password = req.body.password || 'password';
  let condition = {username: req.params.username};
  let update = {password: bcrypt.hashSync(password, null, null)};

  userModels.findOneAndUpdate(condition, update, function (err, results) {
    if (err) return res.status(500).json(err);
    res.status(200).json(results);
  });
}

function user (req, res, next) {
  let condition = {username: req.params.username};

  userModels.findOneAndUpdate(condition, req.body, function (err, results) {
    if (err) return res.status(500).json(err);
    res.status(200).json(results);
  });
}
