import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../service/spotify.service';

@Component({
	selector: 'app-artista',
	templateUrl: './artista.component.html',
	styles: [
	]
})
export class ArtistaComponent {

	artista: any = {};
	topTracks: any[] = [];

	loadingArtista: boolean;

	constructor(private router: ActivatedRoute,
				private spotify: SpotifyService ) {
		
		this.loadingArtista = true;

		this.router.params.subscribe(params => {
			this.traerArtista(params.id);
			this.traerTopTracks(params.id);
		});
	}

	traerArtista( id:string ){

		this.loadingArtista = true;

		this.spotify.getArtista(id)
				.subscribe( artista => {
					console.log(artista);
					this.artista = artista

					this.loadingArtista = false;
				});
	}

	traerTopTracks( id: string){
		this.spotify.getTopTracks(id)
				.subscribe( topTracks => {
					console.log(topTracks);
					this.topTracks = topTracks;
				})
	}


}
