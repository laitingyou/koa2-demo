# koa2-demo
一个入门级nodejs服务端项目，采用了koa2轻量框架。数据库使用mysql，缓存使用redis。
## 运行
```
npm install
npm start
```
##目录机构
```
  '    |-- .env',
  '    |-- .gitignore',
  '    |-- app.js',
  '    |-- package.json',
  '    |-- README.md',
  '    |-- app',
  '    |   |-- controller',
  '    |   |   |-- user.js',
  '    |   |-- middleware',
  '    |   |   |-- error.js',
  '    |   |-- model',
  '    |       |-- user.js',
  '    |-- bin',
  '    |   |-- run.js',
  '    |-- config',
  '    |   |-- config.json',
  '    |-- database',
  '    |   |-- users.js',
  '    |-- migrations',
  '    |   |-- 20181016051033-create-user.js',
  '    |-- models',
  '    |   |-- index.js',
  '    |   |-- user.js',
  '    |-- resource',
  '    |   |-- views',
  '    |       |-- layout.ejs',
  '    |-- routes',
  '    |   |-- home.js',
  '    |   |-- index.js',
  '    |-- seeders',
  '    |   |-- 20181016070519-user.js',
  '    |-- utils',
  '        |-- mysql.js',
  '        |-- redis.js',
  ''
```

