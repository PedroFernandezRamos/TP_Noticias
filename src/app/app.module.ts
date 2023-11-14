import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoriaPageComponent } from './pages/categoria-page/categoria-page.component';
import { FuentePageComponent } from './pages/fuente-page/fuente-page.component';
import { FiltroCategoriaComponent } from './components/filtro-categoria/filtro-categoria.component';
import { FiltroFuenteComponent } from './components/filtro-fuente/filtro-fuente.component';
import { FiltroPaisComponent } from './components/filtro-pais/filtro-pais.component';
import { PaisPageComponent } from './pages/pais-page/pais-page.component';
import { FooterComponent } from './shared/footer/footer.component';


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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
