const spotify = require('./credentials');

const authSpotify = (req, res) => {
    const scopes = 'user-read-private user-read-email';
    const url = `https://accounts.spotify.com/authorize?&client_id=${
        spotify.client_id
      }&redirect_uri=${encodeURI(
        spotify.redirect_uri
      )}&response_type=code&scope=${scopes}`;

      res.redirect(url);
}; 

module.exports = authSpotify;