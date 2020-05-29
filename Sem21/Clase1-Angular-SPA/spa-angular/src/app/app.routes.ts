import { RouterModule, Routes } from '@angular/router';  // Importar "componente" para trabajar con rutas
import { HomeComponent } from './components/home/home.component'; // Importar "HomeComponent"
import { AboutComponent } from './components/about/about.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistComponent } from './components/artist/artist.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent }, // Ruta para el home
    { path: 'about', component: AboutComponent }, // Ruta para el about
    { path: 'artists', component: ArtistsComponent }, // Ruta para el artists
    { path: 'artist/:id', component: ArtistComponent }, // Ruta para el artists
    { path: '**', pathMatch: 'full', redirectTo: 'home' } // Ruta por defecto
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);