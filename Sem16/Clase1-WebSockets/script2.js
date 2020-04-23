var wsUri = "ws://localhost:8080";
var output;

enviar = document.getElementById("enviar");
output = document.getElementById("output");

websocket = new WebSocket(wsUri);
websocket.onopen = () =>{
    console.log('Conectado');
}
websocket.onerror = (e) =>{
    console.log('Error en conexión ', e);
}
websocket.onmessage = (e) =>{
    console.log(e.data);
    writeToScreen(e.data);
}

enviar.addEventListener('click', () => {
    texto = document.getElementById("texto");
    websocket.send(JSON.stringify(texto.value))
});



// function init() {
//     output = document.getElementById("output");
//     testWebSocket();
// }

// function testWebSocket() {

//     websocket = new WebSocket(wsUri);

//     websocket.onopen = onOpen();

//     websocket.onclose = onClose;

//     websocket.onmessage = onMessage;

//     websocket.onerror = onError;

// }

// function onOpen(evt) {
//     writeToScreen("CONECTADO");
//     doSend("WebSocket funciona");
// }

// function onClose(evt) {
//     writeToScreen("DESCONECTADO");
// }

// var res;
// function onMessage(evt) {
//     res = evt;
//     writeToScreen('<span style="color: blue;">RESPUESTA: ' + evt.data + '</span>');
//     websocket.close();
// }

// function onError(evt) {
//     writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
// }

// function doSend(message) {
//     writeToScreen("ENVIADO: " + message);
//     websocket.send(message);
// }

function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

// window.addEventListener("load", init, false);


/**
 * Abrir conexión
 * Enviar mensaje
 * Recibir respuesta
 * Cerrar conexión
 */