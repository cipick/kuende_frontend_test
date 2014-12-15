# Express
express = require('express')
fs = require('fs')

server = null
app = express()

app.use(express.static(__dirname + '/../public'))

app.get '/', (req, res)->
  fs.readFile '/../public/index.html', 'binary', (err, file)->
    res.writeHead(200)
    res.write(file, 'binary')
    res.end()

app.get '/api/news', (req, res) ->
    start = req.query.start
    limit = req.query.limit
    news = require('../public/api/news')
    if(start && limit)
      limit = +start + +limit
      res.send(news.slice(start,limit))
    else
      if(!start)
        res.send(news.slice(0,limit))
      else
        res.send(news)

app.get '/api/info', (req, res) ->
    info = require('../public/api/info')
    res.send(info)

server = app.listen(8000)

console.log "server started on port 8000"

module.exports =
  stop: ()->
    server.close()