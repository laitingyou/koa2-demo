var home = require('koa-router')()
var user = require('../app/controller/user')


home.get('getList', user.getList)
home.post('setLog', user.setLog)
home.get('getLog', user.getLog)
home.get('*', function(ctx){
	ctx.body = 1232131312312
})
module.exports = home
