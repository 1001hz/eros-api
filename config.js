module.exports = {
    secret: process.env.SECRET,
    database: process.env.DATABASE,
    version: process.env.APP_VERSION,
    name: process.env.NAME,
    port: process.env.PORT,
    host: process.env.HOST,
    imagePath: process.env.IMAGE_PATH,
    imageWebPath: process.env.IMAGE_WEB_PATH,
    tokenExpiryInMs: process.env.TOKEN_EXPIRY_IN_MS,
    access: {
        port: process.env.ACCESS_PORT,
        host: process.env.ACCESS_HOST
    },
    mail: {
        user: process.env.MAIL_USER,
        password: process.env.MAIL_PASSWORD
    }
};