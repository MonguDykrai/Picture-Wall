const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; // 双斜杠要跟在mongodb:后面

function getData(callbackName, res, req) {
  const urlArr = req.url.split('/')
  const limit = isNaN(Number(urlArr[2])) ? null : {_id: Number(urlArr[2])}

  let collectionName = urlArr[1].toLowerCase()
  console.log(collectionName)

  MongoClient.connect(url, function (err, client) {
    if (err) throw err
    const db = client.db('picturewall')
  
    db.collection(`pw_${collectionName}`).find(limit).toArray(function (err, data) {
      if (err) throw err

      data = JSON.stringify(data)
      res.end(`${callbackName}(${data})`)
    })
    client.close()
  })
}

module.exports = getData