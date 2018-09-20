module.exports = {
    'port':process.env.PORT || 3000,
    'connexionString': 'mongodb://localhost:27017/koa-rest',
    'baseApi': 'api',
    'secret': 'jwt_secret'
};

