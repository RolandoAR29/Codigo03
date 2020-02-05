var fecha = document.getElementById('fecha');

fecha.addEventListener('change', () => {
    if(fecha.value < formatearFechaActual()){
        document.getElementById('fecha-mensaje').innerHTML = 'Debe ser una fecha posterior a hoy';
        document.getElementById('fecha-mensaje').style.display = 'block';
    } else {
        document.getElementById('fecha-mensaje').style.display = 'none';
    }
});

function formatearFechaActual(){
    var fecha = new Date;
    return (fecha.getMonth() > 9 || fecha.getDate() > 9) ?
    fecha.getFullYear() + '-' + fecha.getMonth()+1 + '-' + fecha.getDate()
    : fecha.getFullYear() + '-' + '0'+(fecha.getMonth() +1) + '-' + '0' + fecha.getDate();
}