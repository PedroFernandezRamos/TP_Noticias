import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoriaPageComponent } from './pages/categoria-page/categoria-page.component';
import { FuentePageComponent } from './pages/fuente-page/fuente-page.component';
import { PaisPageComponent } from './pages/pais-page/pais-page.component';
import { PalabraClavePageComponent } from './pages/palabra-clave-page/palabra-clave-page.component';
import { FechaPageComponent } from './pages/fecha-page/fecha-page.component';
import { FavoritasPageComponent } from './pages/favoritas-page/favoritas-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'categoria', component: CategoriaPageComponent },
  { path: 'fuente', component: FuentePageComponent },
  { path: 'pais', component: PaisPageComponent },
  { path: 'palabra_clave', component: PalabraClavePageComponent },
  { path: 'fecha', component: FechaPageComponent },
  { path: 'favoritas', component: FavoritasPageComponent },
  { path: 'nosotros', component: AboutUsComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'cotizaciones', component: CotizacionesComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
