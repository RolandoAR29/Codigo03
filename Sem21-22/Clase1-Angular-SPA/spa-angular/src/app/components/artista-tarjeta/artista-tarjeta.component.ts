import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-artista-tarjeta',
	templateUrl: './artista-tarjeta.component.html'
})
export class ArtistaTarjetaComponent implements OnInit {

	@Input() artist: any = {};
	@Input() i: number;

	@Output() artistSelected: EventEmitter<number>;

	constructor(private router: Router) {
		this.artistSelected = new EventEmitter();
	}

	ngOnInit(): void {
	}

	verArtist() {
		// console.log(this.i);
		// this.router.navigate( ['/artist', this.i] );
		this.artistSelected.emit(this.i);
	}

}
