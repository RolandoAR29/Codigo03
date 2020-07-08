import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
	selector: 'app-reactive',
	templateUrl: './reactive.component.html',
	styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

	formulario: FormGroup;

	constructor( private fb: FormBuilder,
				private validadores: ValidadoresService) {
		this.crearFormulario();
		this.cargarData();
		this.crearListeners();
	}

	ngOnInit(): void {
	}

	get nombreNoValido(){
		return this.formulario.get('nombre').invalid && this.formulario.get('nombre').touched;
	}

	get apellidoNoValido(){
		return this.formulario.get('apellido').invalid && this.formulario.get('apellido').touched;
	}

	get correoNoValido(){
		return this.formulario.get('correo').invalid && this.formulario.get('correo').touched;
	}

	get distritoNoValido(){
		return this.formulario.get('direccion.distrito').invalid && this.formulario.get('direccion.distrito').touched;
	}

	get ciudadNoValido(){
		return this.formulario.get('direccion.ciudad').invalid && this.formulario.get('direccion.ciudad').touched;
	}

	get pasatiempos(){
		return this.formulario.get('pasatiempos') as FormArray;
	}

	get pass1NoValido(){
		return this.formulario.get('pass1').invalid && this.formulario.get('pass1').touched;
	}

	get pass2NoValido(){
		const pass1 = this.formulario.get('pass1').value;
		const pass2 = this.formulario.get('pass2').value;

		return (pass1 === pass2) ? false : true
	}

	get usuarioNoValido(){
		return this.formulario.get('usuario').invalid && this.formulario.get('usuario').touched;
	}

	crearFormulario(){
		this.formulario = this.fb.group({
			// El contenido es un objeto { propiedad: valor }
			// cada propiedad es un elemento del formulario
			// cada valor es un arreglo [VALOR_POR_DEFECTO, [VALIDACION_SINC_1 , VALIDACION_SINC_2], [VALIDACION_ASINC_1 , VALIDACION_ASINC_2] ]
			nombre		: ['', [Validators.required, Validators.minLength(5), this.validadores.noSergio] ],
			apellido	: ['', Validators.required],
			correo		: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[[a-z0-9.-]+\.[a-z]{2,3}$')] ],
			usuario		: ['', , this.validadores.existeUsuario], // [src] = "sadasd" | noImage
			pass1		: ['', Validators.required],
			pass2		: ['', Validators.required],
			direccion	: this.fb.group({
				distrito	: ['', Validators.required],
				ciudad		: ['', Validators.required],
			}),
			pasatiempos	: this.fb.array([])
		}, {
			validators: this.validadores.passwordsIguales('pass1', 'pass2')
		})
	}

	cargarData(){
		// this.formulario.setValue({
		this.formulario.reset({
			nombre: 'Rolando',
			apellido: 'Avalos',
			correo: 'ravalos@gmail.com',
			direccion: {
			  distrito: 'Trujillo',
			  ciudad: 'Trujillo'
			},
			pass1:	'123',
			pass2:	'123'
		});

		['angular', 'php', 'html'].forEach( item => this.pasatiempos.push(this.fb.control(item)) );
	}

	crearListeners(){
		// this.formulario.valueChanges.subscribe( valor => {
		// 	console.log(valor);
		// });

		// this.formulario.statusChanges.subscribe( status => {
		// 	console.log({status})
		// });

		this.formulario.get('nombre').valueChanges.subscribe(console.log);
	}

	agregarPasatiempo(){
		this.pasatiempos.push( this.fb.control('') );
	}

	borrarPasatiempo(i: number){
		this.pasatiempos.removeAt(i);
	}

	guardar(){
		console.log(this.formulario);


		if(this.formulario.invalid){
			return Object.values(this.formulario.controls).forEach( control => {
						if(control instanceof FormGroup){
							Object.values(control.controls).forEach( control => { control.markAsTouched() });
						} else {
							control.markAsTouched();
						}

					});
		}

		this.formulario.reset({
			nombre: 'sin nombre'
		});
	}

}
