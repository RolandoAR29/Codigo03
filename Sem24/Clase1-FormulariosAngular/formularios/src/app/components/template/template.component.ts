import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
	selector: 'app-template',
	templateUrl: './template.component.html',
	styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

	usuario = {
		nombre: 'Rolando',
		apellido: 'Avalos',
		correo: 'ravalosr@gmail.com',
		pais: 'PER',
		genero: 'M'
	}

	paises: any[] = [];

	constructor( private paisService: PaisService ) { }

	ngOnInit(): void {
		this.paisService.getPaises()
			.subscribe(paises => {
				this.paises = paises;

				this.paises.unshift({
					nombre: '-- Seleccione país --',
					codigo: ''
				})
				console.log(paises);
			});
	}

	guardar(formulario: NgForm) {
		console.log(formulario);


		if(formulario.invalid){
			Object.values(formulario.controls).forEach( control => {
				control.markAsTouched();
			})
		}

		console.log(formulario.value);
	}

}
