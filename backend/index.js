const express = require('express');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const postsRoutes = require('./routes/posts');

const errorController = require('./controllers/error');

const cors = require('cors');

const app = express();

const ports = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Conrol-Allow-Origin', '*');
  res.setHeader('Access-Conrol-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Conrol-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/auth', authRoutes);

app.use('/post', postsRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`listening on port ${ports}`));