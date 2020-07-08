import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';

import { CargaImagenesService } from '../../service/carga-imagenes.service';

@Component({
	selector: 'app-carga',
	templateUrl: './carga.component.html',
	styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

	estaSobreElemento = false;
	archivos: FileItem[] = [];

	constructor( public _cargarImagenes: CargaImagenesService ) { }

	ngOnInit(): void {
	}

	cargarImagenes() {
		this._cargarImagenes.cargarImagenesFirebase(this.archivos);
	}

	limpiarArchivos(){
		this.archivos = [];
	}

}
