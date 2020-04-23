var wsUri = "ws://localhost:8080";
var output;

function init() {
    output = document.getElementById("output");
    testWebSocket();
}

function testWebSocket() {

    websocket = new WebSocket(wsUri);

    websocket.onopen = onOpen;

    websocket.onclose = onClose;

    websocket.onmessage = onMessage;

    websocket.onerror = onError;

}

function onOpen(evt) {
    writeToScreen("CONECTADO");
    doSend("WebSocket funciona");
}

function onClose(evt) {
    writeToScreen("DESCONECTADO");
}

function onMessage(evt) {
    writeToScreen('<span style="color: blue;">RESPUESTA: ' + evt.data + '</span>');
    websocket.close();
}

function onError(evt) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message) {
    writeToScreen("ENVIADO: " + message);
    websocket.send(message);
}

function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

window.addEventListener("load", init, false);