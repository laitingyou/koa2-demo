const User = require('../../database/users')

exports.find = async function(ctx){
	let res =  await User.findAll({
    where: {

    }
	})
	return res
}