$(function(){
	$('#botoncito').on('click', function(){

		alert('hola Nandito');

		var ruc = $('#ruc').val();
		var url = 'consulta_sunat.php';
		$('.ajaxgif').removeClass('hide');
		$.ajax({
		type:'POST',
		url:url,
		data:'ruc='+ruc,
		success: function(datos_dni){
			mostrarDatos(datos_dni);		
		}
	});
	return false;
	});
});

function mostrarDatos(datos_dni) {
	$('.ajaxgif').addClass('hide');
	var datos = eval(datos_dni);
	

	escribirEnHTML(datos)
	.then( respuesta => {
		return respuesta;
	})
	.then( respuestaSaludo =>{
		console.log(respuestaSaludo);
		$('#saludo').text(respuestaSaludo);
	});
}

const escribirEnHTML = datos => {
	return new Promise((resolve, reject) => {
		if(datos != null){
			console.log('Estoy dibujando los datos');
			$('#numero_ruc').text(datos[0]);
			$('#razon_social').text(datos[1]);
			$('#fecha_actividad').text(datos[2]);
			$('#condicion').text(datos[3]);
			$('#tipo').text(datos[4]);
			$('#estado').text(datos[5]);
			$('#fecha_inscripcion').text(datos[6]);
			$('#domicilio').text(datos[7]);
			$('#emision').text(datos[8]);
			resolve(saludar(datos))
		} else{
			reject('No hay datos a mostrar');
		}
	})
}

const saludar = datos => {
	return new Promise((resolve, reject) => {
		if(datos != null){
			resolve('Hola ' + datos[1]);
		} else {
			reject('No se encontraron datos');
		}
	});
}

// function escribirEnHTML(datos) {
// 	var nada ='nada';
// 	if(datos[0]==nada){
// 		alert('DNI o RUC no válido o no registrado');
// 	}else{
// 		$('#numero_ruc').text(datos[0]);
// 		$('#razon_social').text(datos[1]);
// 		$('#fecha_actividad').text(datos[2]);
// 		$('#condicion').text(datos[3]);
// 		$('#tipo').text(datos[4]);
// 		$('#estado').text(datos[5]);
// 		$('#fecha_inscripcion').text(datos[6]);
// 		$('#domicilio').text(datos[7]);
// 		$('#emision').text(datos[8]);
// 	}
// }

// function saludar(datos) {
// 	alert('Hola ' + datos[1]);
// }