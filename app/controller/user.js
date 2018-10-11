const User = require('../model/user')
exports.hello = async function (ctx,next) {
	let allUsers = await User.find()
	await ctx.render('layout',{
		users: allUsers
	})
}