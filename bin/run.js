let env = require('node-env-file')
env('.env')
const app = require('../app')
const {
	PORT
} = process.env

app.listen(PORT)