import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class SpotifyService {

	constructor( private http: HttpClient ) {
		console.log('Servicio de spotify listo');
	}

	getQuery( query:string ){
		const url = `https://api.spotify.com/v1/${ query }`;

		const headers = new HttpHeaders({
			'Authorization': 'Bearer BQDXqsabfOxwbUhJNuV9AmlukmT9a6GcQy_JVgjCEcj1tkuQ9IR3zBKQHa0rFruBlDBeO_FMT8jXsJ6Jq1Y'
		});

		return this.http.get(url, { headers });
	}

	getNewReleases(){
		return this.getQuery('browse/new-releases?limit=20')
				.pipe( map( data => data['albums'].items ));
	}

	getArtista(texto: string){
		return this.getQuery(`search?q=${ texto }&type=artist&limit=15`)
				.pipe( map( data => data['artists'].items));
	}
}
