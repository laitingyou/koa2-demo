let db = require('../../utils/mysql')
exports.find = function(key){
  return new Promise((resolve)=>{
    db.get(key,function (err, value) {
      resolve(value)
    })
  })
}
exports.hgetall = function(hash){
 return new Promise((resolve)=>{
    db.hgetall(hash,function (err, replies) {
      resolve(replies)
      console.log(replies)
    })
  })
}
exports.hget = function (hash,key) {
    return new Promise((resolve)=>{
        db.hget(hash,key,function (err, replies) {
            resolve(replies)
            console.log(replies)
        })
    })
}
exports.hset = function(...arguments){
	return db.hset(...arguments)
}
exports.set = db.set
