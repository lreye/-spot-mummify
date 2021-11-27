const express = require('express');
const getAccessToken = require('../middleware/getAccessToken');
const config = require('../config');

const getAuthRoutes = () => {
    const router = express.Router();
    router.get('/welcome', getAccessToken, welcome);
    return router;
};

const welcome = (req, res, next) => {
    console.log("Hello Authorized User");
    req.app.db.insert(req.credentials, err =>{
        if(err){
            next(err);
        }
        else{
            console.log("Redirect After Saving Token");
            res.status(200).redirect(`${config.client.clientURL}:${config.client.portNumber}/history?authorized=true`);
        }
    });
};

module.exports = {getAuthRoutes};