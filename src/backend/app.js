require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Datastore = require('nedb');
const cron = require('node-cron');

//db will be moved to another file in future
const db = new Datastore();

//express app
const app = express();
const clientURL = process.env.CLIENT_URL;


//midleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

//pusher
const Pusher = require('pusher');

//routes

//authariztion route
const authSpotify = require("./authForSpotify");
const getAccessToken = require('./getAccessToken');
app.get('/devlogin', authSpotify);
app.get('/auth/welcome', getAccessToken);


/*
authorized user routes | must also create a file and follow 
authariztion route as an example for future implementation
*/
app.get('/auth/welcome', getAccessToken, (req, res, next) => {
    console.log("Hello Authorized User");
    db.insert(req.credentials, err =>{
        if(err){
            next(err);
        }
        else{
            console.log("Redirect After Saving Token");
            res.redirect(`${clientURL}/?authorized=true`);
        }
    })
});

//home route
app.get('/', (req, res) => {
    console.log("Hello Welcome");
    res.status(200).send('Hello Welcome');
});

module.exports = app;