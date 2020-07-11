// const getImg = () => {
//     const promesa = new Promise( (resolve, reject) => {
//         resolve('https://google.com');
//     })

//     return promesa;
// }

// getImg().then(console.log);

const getImage = async() => {
    try {
        const apiKey = '366nhz9ELp0HXCYDTFsu3LYf957CrDIP';

        const peticion = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await peticion.json();
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);
    } catch (error) {
        console.log(error);
        alert('hubo una falla, inténtelo más tarde');
    }
}

getImage().then(console.log);


/***************  OPERADOR TERNARIO **************/
const activo = true;
let mensaje = '';

// if (activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

// const mensaje = ( !activo ) ? 'Activo' : 'Inactivo';
// const mensaje = ( activo ) ? 'Activo' : null;

// const mensaje = !activo && 'Activo';
// const mensaje = activo && getImage().then(console.log);

const persona = {
    nombre: 'Juan',
    edad: 26
}

// Validación de persona mayor a 18 años
mensaje = (persona.edad < 18) && 'Puede ingresar';

console.log(mensaje);