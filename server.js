const express = require('express')
const path = require('path')
const http = require('http')
const socketIO = require('socket.io');

const app = express()
const server = http.createServer(app)
const io = socketIO(server);  //IO conectado com o server

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname, + '../public/index.html')
})

server.listen(4040, () => {
    console.log('server conectado em localhost:4040')
})


io.on('connection', (socket) => {
    console.log('SOCKET conectado')
})
