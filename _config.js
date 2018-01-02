module.exports = {
    secret: 'xcxcxc',
    //database: 'mongodb://localhost:27017',
    database: 'mongodb://1001hz:Hendri*@ds051720.mlab.com:51720/1001hz',
    version: 'v1',
    name: 'My App',
    port: 3001,
    host: 'http://localhost',
    imagePath: './public/uploads/avatars/',
    imageWebPath: '/uploads/avatars/',
    tokenExpiryInMs: 3600000,
    access: {
        port: '4200',
        host: 'http://localhost'
    }
};

SECRET=xcxcxc DATABASE=mongodb://1001hz:Hendri*@ds051720.mlab.com:51720/1001hz APP_VERSION=v1 NAME=MyApp PORT=3001 HOST=http://localhost IMAGE_PATH=./public/uploads/avatars/ IMAGE_WEB_PATH=/uploads/avatars/ TOKEN_EXPIRY_IN_MS=3600000 ACCESS_PORT=4200 ACCESS_HOST=http://localhost
