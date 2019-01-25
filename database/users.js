const db = require('../utils/mysql')
const Sequelize = require('sequelize')
const User = db.define('books', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  }
})
module.exports = User