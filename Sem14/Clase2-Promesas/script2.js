let usuarios = [{
    id: 1,
    nombre: 'Nandito'
},
{
    id: 2,
    nombre: 'Pedrito'
}];

let telefonos = [{
    id: 1,
    telefono: 987898789
},
{
    id: 2,
    telefono: 985632578
}];

const obtenerUsuario = id => {
    return new Promise((resolve, reject) => {
        debugger;
        if(usuarios.find(usuario => usuario.id === id)){
            console.log('El usuario existe');
            resolve(obtenerTelefono(id));
        } else {
            reject('El usuario no existe');
        }
    });
};

/*
FUNCION_ANONIMA(id) => {

}
 */

 /*
FUNCION_ANONIMA(resolve, reject) => {

}
 */

const obtenerTelefono = id => {
    return new Promise((resolve, reject) => {
        if(telefonos.find(telefono => telefono.id === id)){
            resolve('El telefono existe');
        } else {
            reject('El telefono no existe');
        }
    });
};

obtenerUsuario(3)
.then( res => {
    return res;
})
.then(mensaje => {
    console.log(mensaje);
})
.catch( error => {
    console.error(error);
});