import { Component } from '@angular/core';
import { Noticia } from 'src/app/models/noticiaClase';
import { NoticiasServiceService } from 'src/app/services/noticias-service.service';

@Component({
  selector: 'app-fuente-page',
  templateUrl: './fuente-page.component.html',
  styleUrls: ['./fuente-page.component.css']
})
export class FuentePageComponent {

  listadoDeNoticias: Noticia[] = [];
  loading = false;

  constructor(private _api: NoticiasServiceService){

  }

  buscarNoticiasPorFuente(fuente: string){
    this.loading = true;
    this.listadoDeNoticias=[];

    setTimeout(() => {
    this._api.getNoticiasPorFuente(fuente).subscribe((resultado)=>
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
