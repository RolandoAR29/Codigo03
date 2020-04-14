const setearDatos = data => {
    contenedor.textContent = data;
}

const traerDatos = () => {
    return new Promise((resolve, reject) => {
        setearDatos('Solicitanto autorización'); 
        setTimeout(() => {
            resolve(true)
        }, 1000);
    })    
}

const mostrarDatos = () => {
    return new Promise((resolve, reject) => {
        setearDatos('Esperando a mostrar la información'); 
        setTimeout(() => {
            resolve({nombre: 'Nando'});
        }, 1000);
    });
}

// btn.addEventListener('click', () => { 
//     traerDatos().then(autorizacion => {
//         if(autorizacion) {
//             mostrarDatos().then(usuario => {
//                 setearDatos('Bienvenido ' + usuario.nombre)
//             })
//         }
//     });
// })

btn.addEventListener('click', () => { 
    traerDatos()
    .then(autorizacion => {
        if(autorizacion) {
            return mostrarDatos()
        }
    }).then(usuario => {
        setearDatos('Bienvenido ' + usuario.nombre)
    });
})