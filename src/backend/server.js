const app = require('./app');
const config = require('./config');
//server config
const PORT = config.client.portNumber;
const HOST = config.client.clientURL;

app.set('port', PORT)
const server = app.listen(app.get('port'), () => {
    console.log(`Running on ${HOST}:${PORT}`);
});