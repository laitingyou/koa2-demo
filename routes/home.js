var home = require('koa-router')()
var user = require('../app/controller/user')


home.get('/', user.hello)
home.get('*', function(ctx){
	ctx.body = 1232131312312
})
module.exports = home