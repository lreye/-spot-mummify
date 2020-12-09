const app = require('./src/backend/app');
//server config
const PORT = 5000;
const HOST = '0.0.0.0';

app.set('port', PORT)
const server = app.listen(app.get('port'), () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});