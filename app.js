const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

//Routes
app.get('/', (req, res) => {
  res.send('You are on Homepage');
});

//Connect to DB
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('You are connected!');
  client.close();
});


//Listening
app.listen(3000);

