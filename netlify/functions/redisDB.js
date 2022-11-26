"use strict";

const Redis = require('ioredis');
const fs = require('fs');

const redis = new Redis({
    host: 'redis-18288.c275.us-east-1-4.ec2.cloud.redislabs.com',
    port: 18288,
    password: 'kmg61995'
});

module.exports = redis.connect();