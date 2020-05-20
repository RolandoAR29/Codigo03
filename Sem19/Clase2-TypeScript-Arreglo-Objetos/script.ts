(function() {

    const powerRanger = {
        nombre: 'Sergio',
        clave: 'Chanclas',
        poder: 'Rayo láser'
    }

    const extraer = ( {nombre, poder}: any) => {
        //const { nombre, clave } = powerRanger;
        console.log(nombre);
        console.log(poder);

        // console.log(powerRanger.poder);
    }
    
    //extraer(powerRanger);

    const vengadores: string[] = ['IronMan', 'Thor', 'Capitán América'];

    // const [ , , steve ] = vengadores;

    const extraerArray = ( [ tony, odinson, steve ]: string[] ) => {
        console.log( tony );
        console.log( odinson );
        console.log( steve );
    }

    extraerArray(vengadores);
})();