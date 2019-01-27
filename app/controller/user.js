let user = require('../model/user')

exports.setLog = async function(ctx, next) {
    try {
        let {
            id = '',
            type = '',
            errInfo = '',
            log = ''
        } = ctx.request.body

        // let res = user.hset(['uid', 'uid', uid])
        //  ctx.body = res
        // next()

        let time = new Date()*1
        let data = JSON.stringify({
            create_at: time,
            id,
            type,
            errInfo,
            log
        })
        user.hset([id, time, data], function(e,v){
        	console.log(v)
        })
        ctx.body = 'ok'
    } catch (e) {
        ctx.body = '异常'
    }
    // next()
}
exports.getList = async function(ctx, next) {
	// ctx.body = ctx.query
    let {
        id,
        creat_at
    } = ctx.query
	let res = await user.hgetall(id)
	ctx.body = res
    // next()
    // ctx.body = await user.find()
}
exports.getLog = async function(ctx, next) {
    // ctx.body = ctx.query
    let {
        id,
        creat_at
    } = ctx.query
    let res = await user.hget(id,creat_at)
    ctx.body = res
    // next()
    // ctx.body = await user.find()
}