const WebSockets = require('ws'),
    server = new WebSockets.Server({
        port:8080,
    })

function broadcast (message) {
    server.clients.forEach(ws => {
        ws.send(message);
    });
}


server.on('connection', function connection(ws){
    ws.on('message', function incoming(message) {
        broadcast(message);
    });
})