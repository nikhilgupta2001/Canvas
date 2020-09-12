
var express = require('express');
var app = express();
var socket=require('socket.io');
var server=app.listen(3000,function(){
    console.log('you are connected');
});
app.use(express.static('public'));

var io=socket(server);
//when msg is connection
io.sockets.on('connection',newConnection);

function newConnection(socket){
    console.log("we have anew client"+socket.id);
    socket.on('mouse',mouseMsg);

    function mouseMsg(data){
        console.log(data);
        socket.broadcast.emit('mouse',data);
        
    }
}

