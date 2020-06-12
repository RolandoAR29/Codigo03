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
			'Authorization': 'Bearer BQDFex57Kg23hHxOzkPwhXzGzQ9g6tyUUgCcHrZj8KhCRNXq480UUR-VwCOaMX7PK-dDIMq_OLyBEb49-Hk'
		});

		return this.http.get(url, { headers });
	}

	getNewReleases(){
		return this.getQuery('browse/new-releases?limit=20')
				.pipe( map( data => data['albums'].items ));
	}

	getArtistas(texto: string){
		return this.getQuery(`search?q=${ texto }&type=artist&limit=15`)
				.pipe( map( data => data['artists'].items));
	}

	getArtista(id: string){
		return this.getQuery(`artists/${ id }`)
				// .pipe( map( data => data['artists'].items));
	}

	getTopTracks(id: string){
		return this.getQuery(`artists/${ id }/top-tracks?country=us  `)
				.pipe( map( data => data['tracks']));
	}
}
