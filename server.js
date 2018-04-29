const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./config/db');
const port = 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

MongoClient.connect(db.url,(err,database)=>{
    if(err) console.log(err)
    const data = database.db("nodeapi")
    require('./app/routes')(app,data);

    app.listen(port,() => console.log("Server starts"));
})



