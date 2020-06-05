import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html'
})
export class DatosComponent implements OnInit {

  	paises: any[] = [];

	constructor(private http: HttpClient) {
		console.log('Constructor Home');
		this.http.get('https://restcountries.eu/rest/v2/lang/es')
			.subscribe( (rpta: any) => {
				this.paises = rpta;
				console.log(rpta);
			})
	}

  ngOnInit(): void {
  }

}
