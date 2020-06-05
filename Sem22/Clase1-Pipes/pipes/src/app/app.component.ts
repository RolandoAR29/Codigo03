import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    nombre    : string   = 'Capitán América';
    nombre2   : string   = 'mIchaEl jAckson';
    PI        : number   = Math.PI;
    porcentaje: number   = 0.235;
    salario   : number   = 1234.5

    valorPromesa = new Promise<string>( (resolve) => {

      setTimeout(() => {
        resolve('llego la data');
      }, 4500);

    });

    heroe = 
    {
      nombre: 'Logan',
      clave: 'Wolverine',
      edad: 500,
      direccion: {
        calle: 'Primera',
        casa: 20
      }
    }

    personajes: string[] = ['Ironman', 'Spiderman', 'Thor','Loki','Groot'];

    fecha     : Date     = new Date();
    activar   : boolean  = true;

    idioma    : string = 'en';
    videoUrl  : string = 'https://www.youtube.com/embed/vjVkXlxsO8Q';
}