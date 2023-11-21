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
        let img:string = ''
        let partesFecha:string[]=[]
        let fechaAMD:string = ''
        let aut:string = ''

        articulos.forEach(element => {

          aut = 'Desconocido'
          if(element.author != null && element.author != ''){                /// Si tiene autor lo carga y si no lo pone como desconocido
            aut = element.author
          }

          
          img = 'https://img.freepik.com/vector-premium/icono-marco-fotos-foto-vacia-blanco-vector-sobre-fondo-transparente-aislado-eps-10_399089-1290.jpg'
          if(element.urlToImage != null && element.urlToImage != ''){                /// Si tiene imagen la carga y si no pone por default una vacia
            img = element.urlToImage
          }

          partesFecha = element.publishedAt.split('T')    // Divide la cadena en función de la letra "T"
          fechaAMD = partesFecha[0]                       // Toma la primera parte (antes de la "T")

            this.listadoDeNoticias.push({
              fuente: element.source.name,
              autor: aut,
              titulo: element.title,
             descripcion: element.description,
             url: element.url,
             imagen: img,
             fecha: fechaAMD,
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
