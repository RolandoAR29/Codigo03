import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class PaisService {

	constructor(private http: HttpClient) { }

	getPaises() {
		return this.http.get('http://restcountries.eu/rest/v2/lang/es')
			.pipe(
				map( (respuesta: any[]) => {
					return respuesta.map (pais => {
						return {
							nombre: pais.name,
							codigo: pais.alpha3Code
						}
					})
				})
			)
	}

	// getPaises_() {
	// 	return this.http.get('http://restcountries.eu/rest/v2/lang/es')
	// 		.pipe(
	// 			map( (respuesta: any[]) => {
	// 				return respuesta.map (pais => ({ nombre: pais.name,	codigo: pais.alpha3Code	}));
	// 			})
	// 		)
	// }
}
