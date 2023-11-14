import { Component } from '@angular/core';
import { Noticia } from 'src/app/models/noticiaClase';
import { NoticiasServiceService } from 'src/app/services/noticias-service.service';

@Component({
  selector: 'app-categoria-page',
  templateUrl: './categoria-page.component.html',
  styleUrls: ['./categoria-page.component.css']
})
export class CategoriaPageComponent {

  listadoDeNoticias: any[] = [];
  loading = false;

  constructor(private _api: NoticiasServiceService){

  }

  buscarNoticiasPorCategoria(categoria: any){
    this.loading = true;
    this.listadoDeNoticias=[];

    setTimeout(() => {
    this._api.getNoticiasPorCategoria(categoria).subscribe((resultado)=>
      {
        console.log(resultado);
        this.loading = false;
        const articulos: any[] = resultado.articles;

        articulos.forEach(element => {
          
          if(element.urlToImage != null){                 ///si tiene imagen lo carga a la lista y sino pasa al siguiente elemento
            this.listadoDeNoticias.push({
              fuente: element.source.name,
              autor: element.author,
              titulo: element.title,
             descripcion: element.description,
             url: element.url,
             imagen: element.urlToImage,
             fecha: element.publishedAt,
            contenido: element.content
          })
          }
        });

      },
      (error) => {
        console.log(error);
      }
      );
    }, 1000);
    
  }
}
