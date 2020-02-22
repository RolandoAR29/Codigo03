var i = 0;
function agregar(){
    var nombre = document.getElementById('nombre').value;
    var clasePersona = document.getElementById('clasePersona').value;
    i++;
    document.getElementById("tablaEmpleados").innerHTML +=
    "<tr id=fila"+i+"><th scope='row'>" + i + "</th>" +
    "<td>" + nombre + "</td>" +
    validarClasePersona(clasePersona) +
    "<td>" + '<input type="button" onclick="eliminarElemento(fila'+ i +')" class="btn btn-danger" value="+">' + "</td>" +
    "</tr>";
}

function validarClasePersona(clasePersona){
    switch(clasePersona){
        case '1': return "<td><span class='badge badge-primary'>Gerente</span></td>";
            break;
        case '2': return "<td><span class='badge badge-info'>Secretario(a)</span></td>";
            break;
        case '3': return "<td><span class='badge badge-warning'>Colaborador(a)</span></td>";
            break;
    }
}

function eliminar(){
    var table = document.getElementById("tablaEmpleados");
    var rowCount = table.rows.length;
    
    if(rowCount <= 1)
      alert('No hay filas a eliminar');
    else
      table.deleteRow(rowCount -1);
}

function eliminarElemento(elemento){
    elemento.getAttribute('id');
}