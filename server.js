const express = require('express');
const history = require('express-history-api-fallback');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist'));
app.use(history('index.html', { root: './dist' }));

app.listen(PORT, function () {
  console.log('Example app is here http://localhost:3000/');
});
