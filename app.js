const Koa = require('koa2');
const app = new Koa();
const router = require('./routes')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const path = require('path')
const views = require('koa-views')
const helmet = require("koa-helmet")


let {
	STATIC_PATH
} = process.env
// app.use(
// 	views(path.join(__dirname, './resource/views'), {
//   		extension: 'ejs'
// 	})
// )

app.use(helmet())

// 解析参数
app.use(bodyParser()) 

app.use(static(path.join( __dirname,  STATIC_PATH)))

app.use(router.routes(),router.allowedMethods())



module.exports = app 
