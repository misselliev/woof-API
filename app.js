const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

app.use(bodyParser.json());

//Importing Routes
const postsRoutes = require('./routes/posts');
app.use('/posts', postsRoutes);

//routes
app.get('/', (req, res) => {
  res.send('We are on Home!');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Connected!'));

//Listening
app.listen(3000);

