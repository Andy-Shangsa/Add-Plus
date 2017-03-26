/*import io from 'socket.io-client'
var socket = io('http://localhost:3000');
socket.on('connection', function() {
    console.log(socket.id); // 'G5p5...'
});


const CHAT = {

    init: function() {
        var obj = {
            name: 'ssa'
        };
        //setInterval( () => {
        	socket.emit('messages', obj)
        //}, 1000);

        socket.on('message', function(data) {
            console.log(data);
            //socket.emit('messages', data)
        })
    }

}

export default CHAT
调试socket.io*/