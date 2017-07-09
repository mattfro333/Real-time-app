var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var socket = require('socket.io')


app.use(express.static('dist'))

var server = app.listen(port, function(){
  console.log('App is listening on port: ' + port)
})

var io = socket(server)


io.on('connection', function(socket){
  console.log(`User ${socket.id} connected`)
  socket.on('disconnect', function(){
    console.log(`User ${socket.id} disconnected`)
  })
})
