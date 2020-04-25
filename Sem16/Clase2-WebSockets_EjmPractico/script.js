var wsUri = "ws://localhost:8080";
var output;


vender = document.getElementById("vender");
output = document.getElementById("output");

websocket = new WebSocket(wsUri);


datos = [30, 70, 50, 80, 60, 100, 45];

const actualizarDatos = (posicion, valor) => {
    datos[posicion] -= valor
}

websocket.onopen = () => {
    console.log('conectado');
}

websocket.onerror = e => {
    console.log('Error', e);
}

websocket.onmessage = e => {
    console.log(e.data);
    const msg = JSON.parse(e.data);
    actualizarDatos(msg.producto, msg.cantidad);
    chart.update();
}

vender.addEventListener('click', (e) => {
    producto = document.getElementById("producto");
    cantidad = document.getElementById("cantidad");
    e.preventDefault();
    const msg = {
        producto: parseInt(producto.value),
        cantidad: parseInt(cantidad.value),
    }
    websocket.send(JSON.stringify(msg));
});

function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Pollo', 'Carne', 'Chancho', 'Chorizo', 'Lomo de tía', 'Carnero', 'Mollejitas'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: datos,
        }]
    },

    // Configuration options go here
    options: {}
});