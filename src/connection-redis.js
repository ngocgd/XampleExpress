const redis = require('redis');
const redisStore =require('connect-redis')

const client = redis.createClient();
client.connect();
client.on('error', (err)=>{
    console.log(err);
})
module.exports = client;