import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heore.model';

import Swal from 'sweetalert2';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	heroes: HeroeModel[] = [];
	cargando: Boolean = false;

	constructor(private heroesService: HeroesService) { }

	ngOnInit(): void {
		this.cargando = true;
		this.heroesService.getHeroes()
				.subscribe( resp => {
					this.heroes = resp;
					console.log(resp);
					this.cargando = false
				})
	}

	borrarHeroe( heroe: HeroeModel, i: number ){

		Swal.fire({
			title: '¿Estás seguro?',
			text: `Está seguro de borrar a ${ heroe.nombre }`,
			icon: 'question',
			showConfirmButton: true,
			showCancelButton: true
		}).then( resp => {
			if(resp.value){
				this.heroes.splice(i, 1);
				this.heroesService.borrarHeroe(heroe.id).subscribe();
			}
		});

		
	}

}