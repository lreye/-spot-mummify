require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cron = require('node-cron');
const routes = require('./routes/index');

//express app
const app = express();

//set the app to use the db
const db = require("./dataBase");
app.db = db; //need to change implementation 


//midleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
//pusher
const Pusher = require('pusher');

app.use('/', routes.getRoutes());
module.exports = app;