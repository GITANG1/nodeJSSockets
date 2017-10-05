var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
  res.sendfile('index.html');
});

io.on('connection',function(socket){
  console.log("connected");
      socket.on('sender',function(data){
        
        socket.broadcast.emit('receive',{name:'Server: ',message:data});
        
      });

      socket.on('disconnect',function(){
        console.log("disconnected");
      });
});

http.listen(3000,'192.168.0.7',function(){
  console.log("listening on port 3000");
})

