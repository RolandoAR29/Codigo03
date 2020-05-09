(function() {
    // function saludar( nombre:string ){
    //     console.table( 'Hola, qué tal ' + nombre );
    // }    
    // const spiderman = {
    //     nombre: 'Peter'
    // };    
    // saludar(spiderman.nombre);


    /* ------------------ LET y CONST --------------- */
    // var     -> valor variante
    // let     -> valor variante dentre de un mismo scope (espacio)
    // const   -> valor constante

    let mensaje = 'Hola mundo';

    if(true){
        let mensaje = 'Adiós mundo';
    }

    const saludo = 'hola';

    console.log(mensaje);
    
})();