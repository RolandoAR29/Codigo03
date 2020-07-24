const { getArtistaById } = require("./exportaciones");

export const getArtistaByNombreAsync = (nombre) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const p1 = getArtistaById(nombre);
            if(p1){
                resolve(p1);
            } else {
                reject('No encontrado');
            }
        }, 1500);
    });
}