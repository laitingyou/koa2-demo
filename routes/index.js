let home= require('./home')

let router = require('koa-router')()

router.use('/',home.routes(),home.allowedMethods())

module.exports = router