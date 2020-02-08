function validar(){
    var nombre = document.getElementById('nombre').value; //acceder por ID
    var apellido = document.getElementById('apellido').value; //acceder por ID
    var edad = document.getElementById('edad').value; //acceder por NAME
    var direccion = document.getElementById('direccion').value; //acceder por ETIQUETA
    debugger;
    if(nombre === ''){
        alert('Ingrese un nombre');
    }
    if(apellido === ''){
        alert('Ingrese un apellido');
    }
    if(edad === ''){
        alert('Ingrese un edad');
    } else if(isNaN(edad/2)){
        alert("solo se pueden ingresar números");
    } else if(parseFloat(edad)%1 != 0){
        alert("solo números enteros");
    }
    
    if(direccion === ''){
        alert('Ingrese un direccion');
    }
    
       
}
