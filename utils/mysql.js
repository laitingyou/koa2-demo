let mysql = require ('mysql')
let sequelize = require('sequelize')
let {
	db_host,
	db_user,
	db_password,
	db_database
} = process.env
// let pool = mysql.createPool({
// 	host: db_host,
// 	user: db_user,
// 	password: db_password,
// 	database: db_database
// })
const db = new sequelize(db_database, db_user, db_password, {
  host: db_host,
  dialect: 'mysql',

})

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })


module.exports = db