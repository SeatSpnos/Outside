const app = require('../lib/server')();
const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log('Server running on port', PORT);
});
