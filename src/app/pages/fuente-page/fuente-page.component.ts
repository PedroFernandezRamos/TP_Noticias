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
        let img:string = ''

        articulos.forEach(element => {
          
          img = 'https://img.freepik.com/vector-premium/icono-marco-fotos-foto-vacia-blanco-vector-sobre-fondo-transparente-aislado-eps-10_399089-1290.jpg'
          if(element.urlToImage != null){                /// si tiene imagen la carga y si no pone por default una vacia
            img = element.urlToImage
          }
            this.listadoDeNoticias.push({
              fuente: element.source.name,
              autor: element.author,
              titulo: element.title,
             descripcion: element.description,
             url: element.url,
             imagen: img,
             fecha: element.publishedAt,
            contenido: element.content
          })
        });

      },
      (error) => {
        console.log(error);
      }
      );
    }, 1000);
    
  }
}
