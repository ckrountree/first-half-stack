const http = require('http');
const app = require('./lib/app');
const mongodb = require('./lib/mongodb');

const url = 'mongodb:// localhost:27017/';
mongodb.connect(url)
    // eslint-disable-next-line
    .then(() => console.log('mongo connected', url))
    // eslint-disable-next-line
    .catch (err => console.log('mongo FAIL', err));

// eslint-disable-next-line
const server = http.createServer(app);
const port = process.env.port || 3000;

server.listen(port, () => {
    // eslint-disable-next-line
    console.log('server running on', server.address().port);
});