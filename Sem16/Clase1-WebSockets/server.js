/*
 * npm init // Inicializar proyecto con node.js
 * Nombre del proyecto (*), versión, descripción, main (*), ... // Crea un archivo package.json
 * npm install ws // Descargas los paquetes necesarios para usar WebSockets
 * node server.js (Archivo main) // Ejecución de servidor 
 */

var WebSocketServe = require('ws').Server;

wss = new WebSocketServe({ port: 8080 });

wss.on('connection', function connection(ws){
    ws.on('message', function incoming(message) {
        console.log('recibido: ', message);
        ws.send(message);
    })
    ws.send('Conectado');
})