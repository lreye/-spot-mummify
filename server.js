require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Datastore = require('nedb');
const cron = require('node-cron');

//db will be moved to another file in future
const db = new Datastore();

//server
const PORT = 5000;
const HOST = '0.0.0.0';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


//routes
app.get('/', (req, res) => {
    res.send('Hello Welcome to Spotify Mummify');
});

app.set('port', PORT)
const server = app.listen(app.get('port'), () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});