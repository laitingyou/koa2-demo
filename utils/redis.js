const redis = require('redis')
const {
  redis_password,
  redis_host,
  redis_db
} = process.env
redisClient = redis.createClient({
  host: redis_host,
  password: redis_password,
  db: redis_db
})

module.exports = redisClient