export const procesoProcesado = ( iteraciones ) => {
    for (let i = 0; i < iteraciones; i++) {
        console.log('Hola');
    }

    return `${ iteraciones } iteraciones realizadas`;
}