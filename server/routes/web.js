var indexRouter = require('../controller/index');
var usersRouter = require('../controller/users');
var pay = require('../controller/pay');

function web() {}

web.prototype.init = function(app) {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/pay', pay);
}

module.exports = web;