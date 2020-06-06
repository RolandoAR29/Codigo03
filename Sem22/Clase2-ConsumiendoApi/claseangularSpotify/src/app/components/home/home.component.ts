import { Component, } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styles: [
	]
})
export class HomeComponent {

	nuevasCanciones: any[] = [];

	constructor(private spotify: SpotifyService) {
		this.spotify.getNewReleases()
			.subscribe( (datos: any) => {
				console.log(datos.albums.items);
				this.nuevasCanciones = datos.albums.items;
			})
	}
}
