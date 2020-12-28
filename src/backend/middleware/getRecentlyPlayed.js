const fetch = require('node-fetch');

const getRecentlyPlayed = async (accessToken) => {
    const url = 'https://api.spotify.com/v1/me/player/recently-played?limit=10';

    const result  = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }).catch(error => console.log(error));
    const data =  await result.json();
    //console.log(data.items);
    return data.items;
};
module.exports = getRecentlyPlayed;