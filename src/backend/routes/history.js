const express = require('express');
const getRecentlyPlayed = require('../middleware/getRecentlyPlayed');

const getHistoryRoute = () => {
    const router = express.Router();
    router.get('/', getHistory);
    return router;
};

const getHistory = (req, res) => {
    req.app.db.find({}, async (err, docs) => {
        if(err){
            throw Error('Failed to get history');
        }
        const accessToken = docs[0].access_token;
        await getRecentlyPlayed(accessToken).then(data => {
            const arr = data.map(e => ({
                played_at: e.played_at,
                track_name: e.track.name
            }));
            res.json(arr);
            console.log(arr);
        }).catch(err => console.log(err));
    });
};
module.exports = {getHistoryRoute};

