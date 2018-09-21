const config= require('./config');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const jwt = require('koa-jwt');
const errorHandle = require('./middlewares/errorHandle');
const logger = require('koa-logger');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(config.connexionString);

const app = new Koa();
app.use(logger());
// log request URL:
app.use(errorHandle);

app.use(jwt({
    secret:config.secret
}).unless({
    path:[/\/register/, /\/login/],
}));

// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');
