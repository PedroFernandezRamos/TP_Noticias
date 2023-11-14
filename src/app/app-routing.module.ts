import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoriaPageComponent } from './pages/categoria-page/categoria-page.component';
import { FuentePageComponent } from './pages/fuente-page/fuente-page.component';
import { PaisPageComponent } from './pages/pais-page/pais-page.component';

const routes: Routes = [
  {path:'home', component: HomePageComponent},
  {path:'categoria', component: CategoriaPageComponent},
  {path:'fuente', component: FuentePageComponent},
  {path:'pais', component: PaisPageComponent},
  {path:'**', redirectTo:'home'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
