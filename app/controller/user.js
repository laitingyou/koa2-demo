const User = require('../model/user')
const client = require('../../utils/redis')

exports.hello = async function (ctx,next) {
	let allUsers = await User.find()
	ctx.body = allUsers
	// await ctx.render('layout',{
	// 	users: allUsers
	// })
}
exports.setData = async function (ctx,next) {
  client.set("123", "OK")
}