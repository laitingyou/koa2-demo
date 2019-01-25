// let mysql = require ('mysql')
// let {
// 	db_host,
// 	db_user,
// 	db_password,
// 	db_database
// } = process.env
// let pool = mysql.createPool({
// 	host: db_host,
// 	user: db_user,
// 	password: db_password,
// 	database: db_database
// })
//
//
// let query = function(sql, values){
// 	return new Promise((resolve, reject)=>{
// 		pool.getConnection(function(err, conn) {
// 			if (err) return reject(err)
//   			conn.query(sql, values, (err, results, fields) => {
//     			// conn.release()
//     			if (err) return reject(err)
//     			else resolve(results)
//   			})
// 		})
// 	})
// }
//
//
//
// exports.db = {
// 	query
// }
const redis = require('redis')
let {
  redis_host,
  redis_password,
  redis_db,
  redis_port
} = process.env
const client = redis.createClient({
  host: redis_host,
  port: redis_port,
  password: redis_password,
  db: redis_db
});
client.on("error", function (err) {
  console.log("Error " + err);
});

module.exports = client
