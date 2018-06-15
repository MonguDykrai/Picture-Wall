const http = require('http')
const server = http.createServer()
const getData = require('./query/getData')

server.on('request', (req, res) => {
  const reqUrl = req.url;
  const callbackName = reqUrl.substr((reqUrl).indexOf('=') + 1)

  if (reqUrl.startsWith('/category')) {
    getData(callbackName, res, req)
  } else if (reqUrl.startsWith('/cars')) {
    getData(callbackName, res, req)
  } else if (reqUrl.startsWith('/nature')) {
    getData(callbackName, res, req)
  } else if (reqUrl.startsWith('/Video_Games')) {
    getData(callbackName, res, req)
  } else if (reqUrl.startsWith('/featured')) {
    getData(callbackName, res, req)
  }
})

server.listen(5000, function() {
  console.log('服务器已启动')
})