const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const db = require('./config/db');
const port = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


MongoClient.connect(db.url,(err,database)=>{
    if(err) console.log(err)
    const data = database.db("nodeapi")
    require('./app/routes')(app,data);

    //app.listen(port,() => console.log("Server starts"));
})

// require('./app/routes')(app,{});

// app.listen(port,() => console.log("Server starts"));

module.exports = app;
