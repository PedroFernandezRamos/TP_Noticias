import { Component, Input } from '@angular/core';
import { Noticia } from 'src/app/models/noticiaClase';
import { FavoritasService } from 'src/app/services/favoritas.service';

@Component({
  selector: 'app-listado-favoritas',
  templateUrl: './listado-favoritas.component.html',
  styleUrls: ['./listado-favoritas.component.css'],
})
export class ListadoFavoritasComponent {
  @Input() listadoFavoritas: Noticia[] = [];

  constructor(private favoritasService: FavoritasService) {}

  ngOnInit(): void {
    this.favoritasService.getFavs().subscribe((listado) => {
      this.listadoFavoritas = listado;
    });
  }

  onEliminar(noticia: Noticia) {
    this.favoritasService.deleteFav(noticia).subscribe(() => {
      this.listadoFavoritas = this.listadoFavoritas.filter(
        (fav) => fav.id !== noticia.id
      );
    });
  }
}
