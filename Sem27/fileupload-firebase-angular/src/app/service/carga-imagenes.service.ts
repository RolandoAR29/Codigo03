import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { FileItem } from '../models/file-item';

@Injectable({
	providedIn: 'root'
})
export class CargaImagenesService {

	private CARPETA_IMAGENES = 'img';

	constructor(private db: AngularFirestore) { }

	cargarImagenesFirebase(imagenes: FileItem[]) {
		console.log(imagenes);

		const storageRef = firebase.storage().ref();

		for (const item of imagenes) {
			item.estaSubiendo = true;
			if (item.progreso >= 100) {
				continue;
			}

			const refChild = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`);

			const uploadTask: firebase.storage.UploadTask = refChild.put(item.archivo);

			uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
				(snapshot: firebase.storage.UploadTaskSnapshot) =>
					item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
				(error) => console.error("Error al subir ", error),
				() => {
					refChild.getDownloadURL().then((ref) => {
						console.log("Imagen Cargada Correctamente");
						item.url = ref;
						item.estaSubiendo = false;
						this.guardarImagen({ nombre: item.nombreArchivo, url: item.url });
					}).catch(error => {
						console.log(error);
					});
				})

			// const uploadTask: firebase.storage.UploadTask =
			// 	storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
			// 		.put(item.archivo);
			// console.log(uploadTask);
			// uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
			// 	(snapshot: firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
			// 	(error) => console.error('Error al subir', error),
			// 	() => {
			// 		console.log('Imagen cargada correctamente')
			// 		console.log(uploadTask);

			// 		storageRef.getDownloadURL

			// 		uploadTask.snapshotChanges().pipe(
			// 			finalize(() => this.downloadURL = fileRef.getDownloadURL())
			// 		)
			// 			.subscribe();

			// 		item.url = uploadTask.snapshot.downloadURL;
			// 		item.estaSubiendo = false;
			// 		this.guardarImagen({
			// 			nombre: item.nombreArchivo,
			// 			url: item.url
			// 		})
			// 	}
			// )
		}
	}


	private guardarImagen(imagen: { nombre: string, url: string }) {
		this.db.collection(`/${this.CARPETA_IMAGENES}`)
			.add(imagen);
	}

}
