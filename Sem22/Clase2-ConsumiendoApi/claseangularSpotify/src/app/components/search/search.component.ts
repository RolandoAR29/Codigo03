import { Component } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styles: [
	]
})
export class SearchComponent {

	artistas: any[] = [];

	loading: boolean;

	constructor(private spotify: SpotifyService) {
		console.log('constructor Search')
	}

	buscar(texto: string) {
		console.log(texto);

		this.loading = true;
		this.spotify.getArtista(texto)
			.subscribe( (datos :any) => {
				console.log(datos);
				this.artistas = datos;
				this.loading = false;
			})
	}
}
