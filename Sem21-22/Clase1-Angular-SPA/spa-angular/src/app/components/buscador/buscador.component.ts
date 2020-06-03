import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';

@Component({
	selector: 'app-buscador',
	templateUrl: './buscador.component.html',
	styles: [
	]
})
export class BuscadorComponent implements OnInit {

	artists:any[] = [];
	texto:string;

	constructor(private activatedRoute: ActivatedRoute,
				private _artistsService: ArtistsService,
				private router: Router) { }

	ngOnInit(): void {
		this.activatedRoute.params.subscribe( params => {
			// console.log(params.texto);
			this.texto = params['texto'];
			this.artists = this._artistsService.buscarArtista(params.texto);
			console.log(this.artists);
		})
	}

	verArtist( i: number ){
		this.router.navigate( ['/artist', i] );
	}

}