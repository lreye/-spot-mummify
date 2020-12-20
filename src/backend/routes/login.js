const express = require('express');
const authSpotify = require("../middleware/authForSpotify");

const getLoginRoutes = () => {
    const router = express.Router();
    router.get('/dev', authSpotify);
    return router;
};

module.exports = {getLoginRoutes};