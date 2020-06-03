import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes'

// Servicios
import { ArtistsService } from './services/artists.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArtistComponent } from './components/artist/artist.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ArtistaTarjetaComponent } from './components/artista-tarjeta/artista-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ArtistsComponent,
    FooterComponent,
    ArtistComponent,
    BuscadorComponent,
    ArtistaTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ArtistsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
