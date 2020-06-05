import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

	//transform(value: unknown, a:number, b:Boolean, c:string): string { // Renombrando argumentos
	transform(value: string, all: boolean = true): string {
		//console.log(value);         //  dato de entrada
		//console.log({a, b, c});     //  argumentos de entrada, argumentos renombrados

		value = value.toLocaleLowerCase();
		let nombres = value.split(' ');

		if (all) {
			nombres = nombres.map(nombre => {
				return nombre[0].toUpperCase() + nombre.substr(1);
			});
		} else {
			nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
		}

		return nombres.join(' ');
	}

}
