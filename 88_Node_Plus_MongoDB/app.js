const http = require('http')
var server = http.createServer()

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; // 双斜杠要跟在mongodb:后面

server.on('request', function(req, res) {
  const callbackName = req.url.substr((req.url).indexOf('=') + 1)
  console.log(callbackName)
  MongoClient.connect(url, function (err, client) {
    if (err) throw err
    console.log('数据库已连接')
    const db = client.db('picturewall')
  
    db.collection('pw_category').find().toArray(function (err, data) {
      console.log(data)
      // res.end('有请求到达服务器')
      data = JSON.stringify(data)
      console.log(typeof `${callbackName}(${data})`)
      res.end(`${callbackName}(${data})`)
    })
    client.close()
  });
})

server.listen(5000, function() {
  console.log('服务器已启动')
})