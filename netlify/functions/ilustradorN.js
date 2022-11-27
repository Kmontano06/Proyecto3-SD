"use strict"
const redis = require('./redisDB');
const headers = require('./headersCORS');
exports.handler = async (event, context) => {
  if (event.httpMethod == "OPTIONS") {

    return { statusCode: 200, headers, body: "OK" };
  }
  try {
    
    redis.on("connect", function() {
      console.log("You are now connected");
    });
   let n = await redis.get('ilustrador_N');
    return { statusCode: 200, headers, body: JSON.stringify(n)};
  } catch (error) {
    console.log(error);
    return { statusCode: 400, headers, body: JSON.stringify(error) };
  }
};