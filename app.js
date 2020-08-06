const express = require('express');
const app = express();
require('dotenv/config')

//Importing Routes
const postsRoutes = require('./routes/posts');
app.use('/posts', postsRoutes);

//Connect to DB
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  // console.log(err)
  client.close();
});


//Listening
app.listen(3000);

