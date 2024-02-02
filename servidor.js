const http = require('http');
const express = require('express');
const app = express();

const servidorHttp = http.createServer(app);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', ()=> {
    console.log('Um usuario conectou');
})

app.use(express.static('public'));



servidorHttp.listen(1000);
