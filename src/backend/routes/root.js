const express = require('express');

const getRootRoutes = () => {
    const router = express.Router();
    router.get('/', home);
    return router;
};

const home = (req, res) => {
    console.log("Hello Welcome");
    res.status(200).send('Hello Welcome');
};

module.exports = {getRootRoutes};