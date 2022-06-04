const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  console.log("this code is running with process.env.API_SERVER" , process.env.API_SERVER)
  app.use(
    '/v1',
    proxy({
      target: process.env.API_SERVER,
      changeOrigin: false,
    })
  );
};