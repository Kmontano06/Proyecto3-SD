"use strict";
const { Redis } = require('ioredis');
const client = new Redis(host:process.env.REDIS_HOST, port:18288,
                         password:process.env.REDIS_PSW);
module.exports = client.connect();