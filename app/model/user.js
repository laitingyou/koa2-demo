const {db} = require('../../utils/mysql')
exports.find = async function(uid = '*'){
	let res =  await db.query(`select ${uid} from user`)
	return res
}