import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heore.model';

@Injectable({
	providedIn: 'root'
})
export class HeroesService {

	private url = 'https://crud-angular-ef4ab.firebaseio.com';

	constructor(private http: HttpClient) { }
	
	crearHeroe(heroe: HeroeModel){
		return this.http.post(`${ this.url }/heroes.json`, heroe);
	}

}
