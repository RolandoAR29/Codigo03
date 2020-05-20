"use strict";
(function () {
    const enviarMision = (powerRanger) => {
        console.log(`Enviando a ${powerRanger.nombre} a la misión`);
    };
    const regresarDeMision = (powerRanger) => {
        console.log(`Enviando a ${powerRanger.nombre} a la misión`);
    };
    const azul = {
        nombre: 'Azul',
        edad: 30
    };
    // enviarMision(azul);
    // regresarDeMision(azul);
    /**
     * Introducción POO
     */
    /**
     * Objeto
     * Abstracción o modelo de un ente tomado de la realidad
     * Ejm:
     * - Objeto de la realidad          : Auto
     * - Caracterísitcas = Propiedades  : color, marca, modelo
     * - Acciones = Métodos             : enceder(), apagar(), acelerar()
     *
     * Herencia
     * Adoptar las mismas propiedades y métodos de un "objetos padre"
     * Ejm:
     * - Persona
     *      Propiedades: Nombre, DNI, telefono
     *      Métodos: respirar(), comer()
     * ---> Niño
     *          Propiedades: tarjetaDeVacunas
     *          Método: gatear()
     * ---> Adulto
     *          Propiedades: RUC
     *          Método: trabajar()
     */
    /**
     * Definición de clase básica
     */
    class PowerRangerDinoTrueno {
        // nombre: string;
        // nombreReal: string;
        // puedePelear?: boolean;
        // peleasGanadas?: number;
        constructor(nombre, nombreReal, puedePelear, peleasGanadas) {
            this.nombre = nombre;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
            this.nombre = nombre;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = 0;
        }
    }
    // Instanciación de un objeto
    const rojo = new PowerRangerDinoTrueno('Sergio Small', 'Sergio');
    const verde = new PowerRangerDinoTrueno('Sergio Padre', 'Sergio Fernandez', true);
    console.log(rojo);
    console.log(verde);
    /**
     * Promesas
     */
    const retirarDinero = (montoRetirar) => {
        let dineroActual = 1000;
        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActual) {
                reject('No hay suficientes fondos');
            }
            else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(1500)
        .then(montoActual => console.log(`Me queda ${montoActual}`))
        .catch(console.warn);
})();
