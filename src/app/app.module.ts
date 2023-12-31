import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoriaPageComponent } from './pages/categoria-page/categoria-page.component';
import { FuentePageComponent } from './pages/fuente-page/fuente-page.component';
import { FiltroCategoriaComponent } from './components/filtro-categoria/filtro-categoria.component';
import { FiltroFuenteComponent } from './components/filtro-fuente/filtro-fuente.component';
import { FiltroPaisComponent } from './components/filtro-pais/filtro-pais.component';
import { PaisPageComponent } from './pages/pais-page/pais-page.component';
import { FiltroPalabraClaveComponent } from './components/filtro-palabra-clave/filtro-palabra-clave.component';
import { FiltroFechaComponent } from './components/filtro-fecha/filtro-fecha.component';
import { PalabraClavePageComponent } from './pages/palabra-clave-page/palabra-clave-page.component';
import { FechaPageComponent } from './pages/fecha-page/fecha-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListadoFavoritasComponent } from './components/listado-favoritas/listado-favoritas.component';
import { FavoritasPageComponent } from './pages/favoritas-page/favoritas-page.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BotonComponent } from './components/boton/boton.component';
import { BarDolarComponent } from './components/bar-dolar/bar-dolar.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { CotizacionesPageComponent } from './pages/cotizaciones-page/cotizaciones-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListadoNoticiasComponent,
    SpinnerComponent,
    HomePageComponent,
    CategoriaPageComponent,
    FuentePageComponent,
    FiltroCategoriaComponent,
    FiltroFuenteComponent,
    FiltroPaisComponent,
    PaisPageComponent,
    FiltroPalabraClaveComponent,
    FiltroFechaComponent,
    PalabraClavePageComponent,
    FechaPageComponent,
    FooterComponent,
    ListadoFavoritasComponent,
    FavoritasPageComponent,
    ContactoComponent,
    AboutUsComponent,
    BotonComponent,
    BarDolarComponent,
    CotizacionesComponent,
    CotizacionesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
