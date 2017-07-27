const app = require('../lib/server')();
const db = require('../db');
const PORT = process.env.PORT || 8080;

db.start();

app.listen(PORT, function () {
  console.log('Server running on port', PORT);
});
