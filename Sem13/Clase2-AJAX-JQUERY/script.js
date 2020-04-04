$(document).ready(function() {
    debugger;
    $('#loginform').submit(function(e) {
        debugger;
        e.preventDefault(); //evento para trabajar dentro de la misma ruta
        $.ajax({
            type: "POST", //método envío de datos
            url: 'login.php', //dirección archivo de trata de información
            data: $(this).serialize(), //Indicar mis datos del formulario. serialize () -> Codifica los datos para php y los envía tal como se asignó en el NAME
            success: function(response) { //Cuando la respuesta del servidor fue exitosa
                        debugger;
                        console.log(response);
                        console.log(typeof(response));
                        
                        //parse -> Cambiar de tipo de dato de una variable (char->int; int->string; int->float)
                        var jsonData = JSON.parse(response); //decodificar la data enviada en formato JSON

                        console.log(jsonData);
                        console.log(typeof(jsonData));

                        //Credenciales correctas
                        if (jsonData.success == "1") {
                            alert('Credenciales correctas!');
                        }
                        else {
                            alert('Credenciales incorrectas!');
                        }
                    }
       });
     });
});