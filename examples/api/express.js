const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('common'));

app.get('/', (req, res, next) => {
  res.end();
});

app.use((error, req, res, next) => {
  console.log('ERROR', error);
});

app.listen(3000);