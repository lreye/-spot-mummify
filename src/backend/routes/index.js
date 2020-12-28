const express = require('express');
const login = require('./login');
const rootRoute = require('./root');
const auth = require('./auth');
const history = require('./history');

const getRoutes = () => {
    const router = express.Router();
    router.use('/', rootRoute.getRootRoutes());
    router.use('/login', login.getLoginRoutes());
    router.use('/auth', auth.getAuthRoutes());
    router.use('/history', history.getHistoryRoute());
    return router;
};

module.exports = {getRoutes};