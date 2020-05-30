import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';

@Component({
	selector: 'app-buscador',
	templateUrl: './buscador.component.html',
	styles: [
	]
})
export class BuscadorComponent implements OnInit {

	artists:any[] = [];

	constructor(private activatedRoute: ActivatedRoute,
				private _artistsService: ArtistsService) { }

	ngOnInit(): void {
		this.activatedRoute.params.subscribe( params => {
			// console.log(params.texto);
			this.artists = this._artistsService.buscarArtista(params.texto);
			console.log(this.artists);
		})
	}

}