let user = require('../model/user')
exports.setLog = async function (ctx,next) {
   let res= user.set('name','ltysdf')
   ctx.body = res
  next()
}
exports.getLog = async function (ctx,next) {
  ctx.body = await user.find('name')
}
