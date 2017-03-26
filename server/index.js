//使用express启服务，并打开socket.io
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.send('<h1>Welcome Realtime Server</h1>');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    let msg;

    //监听更改信息
    socket.on('messages', function(obj) {
        //向所有客户端广播发布的消息
        console.log(obj);
        //var date = new Date();
        setInterval(() => {
            msg = Math.round(Math.random() * 10);
            io.emit('message', msg);
        }, 30000)
        

    });

});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
