import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';

@Component({
	selector: 'app-artist',
	templateUrl: './artist.component.html',
	styles: [
	]
})
export class ArtistComponent {

	artist:any = {};

	constructor(private activatedRoute: ActivatedRoute,
				private _artistService: ArtistsService) {

		this.activatedRoute.params.subscribe( params => {
			this.artist = this._artistService.getArtist(params.id);			
		})

		console.log(this.artist);
	}

}
