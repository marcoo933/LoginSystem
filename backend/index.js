const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Conrol-Allow-Origin', '*');
  res.setHeader('Access-Conrol-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Conrol-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.listen(ports, () => console.log(`listening on port ${ports}`));