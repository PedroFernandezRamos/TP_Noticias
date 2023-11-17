import { Component, Input } from '@angular/core';
import { Noticia } from 'src/app/models/noticiaClase';
import { FavoritasService } from 'src/app/services/favoritas.service';

@Component({
  selector: 'app-listado-favoritas',
  templateUrl: './listado-favoritas.component.html',
  styleUrls: ['./listado-favoritas.component.css']
})
export class ListadoFavoritasComponent {
  @Input() listadoFavoritas: Noticia[] = [];

  constructor(private favoritasService: FavoritasService){}

  onEliminar(noticia: Noticia){
    console.log(noticia);
  }
}
