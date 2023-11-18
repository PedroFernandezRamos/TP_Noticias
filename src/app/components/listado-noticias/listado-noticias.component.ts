import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/models/noticiaClase';
import { FavoritasService } from 'src/app/services/favoritas.service';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css'],
})
export class ListadoNoticiasComponent implements OnInit {
  @Input() listadoNoticias: Noticia[] = [];

  esFavorito: boolean = false;

  constructor(private favoritasService: FavoritasService) {}

  ngOnInit(): void {}

  onGuardar(noticia: Noticia) {
    this.favoritasService.postFav(noticia).subscribe(
      //@todo deshabilitar botón
    )
  }
}
