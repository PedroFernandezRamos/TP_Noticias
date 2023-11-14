import { Component } from '@angular/core';
import { NoticiasServiceService } from 'src/app/services/noticias-service.service';

@Component({
  selector: 'app-pais-page',
  templateUrl: './pais-page.component.html',
  styleUrls: ['./pais-page.component.css']
})
export class PaisPageComponent {
  listadoDeNoticias: any[] = [];
  loading = false;

  constructor(private _api: NoticiasServiceService){

  }

  buscarNoticiasPorPais(categoria: any){
    this.loading = true;
    this.listadoDeNoticias=[];

    setTimeout(() => {
    this._api.getNoticiasPorPais(categoria).subscribe((resultado)=>
      {
        console.log(resultado);
        this.loading = false;
        const articulos: any[] = resultado.articles;

        articulos.forEach(element => {
          
          if(element.urlToImage != null){                 ///si tiene imagen lo carga a la lista y sino pasa al siguiente elemento (el problema aca es que solo USA tiene noticias con imagenes)
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