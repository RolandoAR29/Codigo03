
var listaItems = [];
function agregar(){
    var objetoItem = {};
    var nombre = document.getElementById('nombre').value;
    var clasePersona = document.getElementById('clasePersona').value;
    objetoItem.nombre = nombre;
    objetoItem.clasePersona = clasePersona;
    listaItems.push(objetoItem);
    limpiarCampos();
    listarDatos(listaItems);
}

function listarDatos(listaItems){
    var cuerpo;
    var cabecera = 
        '<table class="table table-bordered table-hover mt-2" id="tablaEmpleados">' +
        '<thead>' +
            '<tr>' +
                '<th scope="col">#</th>' +
                '<th scope="col">Nombre</th>' +
                '<th scope="col">Clase de persona</th>' +
                '<th scope="col">Acciones</th>' +
            '</tr>' +
        '</thead>' +
        '<tbody>';

        for (let i = 0; i < listaItems.length; i++) {
            cuerpo += "<tr id=fila"+i+"><th scope='row'>" + i + "</th>" +
                        "<td>" + listaItems[i].nombre + "</td>" +
                        validarClasePersona(listaItems[i].clasePersona) +
                        "<td>" + '<input type="button" onclick="eliminarElemento(' + i +')" class="btn btn-danger" value="+">' + "</td>" +
                        "</tr>";
        }

        var footer = '</tbody>' +
            '</table>';

        var tabla = cabecera + cuerpo + footer;

        document.getElementById('tablaEmpleados').innerHTML = tabla;
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

function limpiarCampos(){
    nombre = document.getElementById('nombre');
    clasePersona = document.getElementById('clasePersona');
    nombre.value = '';
    clasePersona.value = '';
}

function eliminarElemento(fila){
    for (let i = 0; i < listaItems.length; i++) {
        if(fila == i){
            listaItems.splice( i, 1 );
            document.getElementById('tablaEmpleados').deleteRow(i + 1);
        }
    }
}