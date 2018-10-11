let mysql = require ('mysql')
let {
	db_host,
	db_user,
	db_password,
	db_database
} = process.env
let pool = mysql.createPool({
	host: db_host,
	user: db_user,
	password: db_password,
	database: db_database
})


let query = function(sql, values){
	return new Promise((resolve, reject)=>{
		pool.getConnection(function(err, conn) {
			if (err) return reject(err)
  			conn.query(sql, values, (err, results, fields) => {
    			// conn.release()
    			if (err) return reject(err)
    			else resolve(results)	
  			})
		})
	})
}



exports.db = {
	query
}