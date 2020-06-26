import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heore.model';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class HeroesService {

	private url = 'https://crud-angular-ef4ab.firebaseio.com';

	constructor(private http: HttpClient) { }
	
	crearHeroe(heroe: HeroeModel){
		return this.http.post(`${ this.url }/heroes.json`, heroe)
				.pipe(
					map( (resp: any) => {
						heroe.id = resp.name;
						return heroe;
					})
				)
	}

	actualizarHeroe(heroe: HeroeModel){

		const heroeTemporal = {
			...heroe // Tomar propiedades de objeto [...nombreDelObjeto]
		}

		delete heroeTemporal.id; // Elimino propiedad 'id'

		return this.http.put(`${ this.url }/heroes/${ heroe.id }.json`, heroeTemporal);
	}

	getHeroes(){
		return this.http.get(`${ this.url }/heroes.json`)
				.pipe(
					map( this.crearArreglo )
				)
	}

	private crearArreglo(heroeObjeto: object){
		const heroes: HeroeModel[] = [];

		console.log(heroeObjeto);

		if(heroeObjeto === null) {return [];}

		
		Object.keys( heroeObjeto ).forEach( key => {
			const heroe: HeroeModel = heroeObjeto[key];
			heroe.id = key;

			heroes.push( heroe );
		});

		return heroes;
	}

}
