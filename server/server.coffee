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

server = app.listen(8000)

console.log "server started on port 8000"

module.exports =
  stop: ()->
    server.close()
