let db = require('../../utils/mysql')
exports.find = function(uid = '*'){
  return new Promise((resolve)=>{
    db.get('name',function (err, value) {
      resolve(value)
    })
  })
}
