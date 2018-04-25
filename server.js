const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const port = 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app,{});


app.listen(port,() => console.log("Server starts"));