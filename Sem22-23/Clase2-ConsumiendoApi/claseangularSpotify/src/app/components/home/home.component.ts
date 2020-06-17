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
	loading: boolean;

	constructor(private spotify: SpotifyService) {

		this.loading = true;

		this.spotify.getNewReleases()
			.subscribe( (datos: any) => {
				console.log(datos);
				this.nuevasCanciones = datos;
				this.loading = false;
			})
	}
}
