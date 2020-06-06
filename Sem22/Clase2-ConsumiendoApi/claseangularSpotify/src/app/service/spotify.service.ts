import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class SpotifyService {

	constructor( private http: HttpClient ) {
		console.log('Servicio de spotify listo');
	}

	getNewReleases(){
		const headers = new HttpHeaders({
			'Authorization': 'Bearer BQDrld-GrgP0bC5ZYOaWDjSjD2LSGmQQrr3lGy4eBbHXOxPnUVKuJ64_ztiPrT4POsB2lxdY0cJTaDVHXog'
		})

		return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
	}
}
