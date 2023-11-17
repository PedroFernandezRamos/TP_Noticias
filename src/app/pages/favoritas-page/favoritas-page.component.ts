import { Component } from '@angular/core';
import { Noticia } from 'src/app/models/noticiaClase';
import { FavoritasService } from 'src/app/services/favoritas.service';

@Component({
  selector: 'app-favoritas-page',
  templateUrl: './favoritas-page.component.html',
  styleUrls: ['./favoritas-page.component.css'],
})
export class FavoritasPageComponent {
  listadoFavoritas: Noticia[] = [];
  loading = false;

  constructor(private apiFavoritas: FavoritasService) {}

  ngOnInit(): void{
    this.apiFavoritas.getFavs().subscribe((listado)=>{
      this.listadoFavoritas = listado;
    })
  }


}
