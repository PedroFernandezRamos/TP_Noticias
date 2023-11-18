import { Component } from '@angular/core';
import { Noticia } from 'src/app/models/noticiaClase';
import { NoticiasServiceService } from 'src/app/services/noticias-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{

  listadoDeNoticias: Noticia[] = [];
  loading = false;

  constructor(private _api: NoticiasServiceService){
    this.buscarNoticiasGenerales();
  }



  buscarNoticiasGenerales(){
    this.loading = true;
    this.listadoDeNoticias=[];

    setTimeout(() => {
    this._api.getNoticias().subscribe((resultado)=>
      {
        console.log(resultado);
        this.loading = false;
        const articulos: any[] = resultado.articles;
        let partesFecha:string[]=[]
        let fechaAMD:string = ''
        let aut:string = ''

        articulos.forEach(element => {

          if(element.urlToImage != null || element.urlToImage != ''){                 ///si tiene imagen lo carga a la lista y sino pasa al siguiente elemento

            aut = 'Desconocido'
            if(element.author != null || element.author != ''){                /// Si tiene autor lo carga y si no lo pone como desconocido
              aut = element.author
            }
  
            partesFecha = element.publishedAt.split('T')    // Divide la cadena en función de la letra "T"
            fechaAMD = partesFecha[0]                       // Toma la primera parte (antes de la "T")

            this.listadoDeNoticias.push({
              fuente: element.source.name,
              autor: aut,
              titulo: element.title,
             descripcion: element.description,
             url: element.url,
             imagen: element.urlToImage,
             fecha: fechaAMD,
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

/*
for entry in news_data:
        try:
            news = entry['news_obj']
            author = news['author_name']
            title = news['title']
            imageUrl = news['image_url']
            url = news['shortened_url']
            content = news['content']
            timestamp = news['created_at'] / 1000
            dt_utc = datetime.datetime.utcfromtimestamp(timestamp)
            tz_utc = pytz.timezone('UTC')
            dt_utc = tz_utc.localize(dt_utc)
            tz_ist = pytz.timezone('Asia/Kolkata')
            dt_ist = dt_utc.astimezone(tz_ist)
            date = dt_ist.strftime('%A, %d %B, %Y')
            time = dt_ist.strftime('%I:%M %p').lower()
            readMoreUrl = news['source_url']

            newsObject = {
                'id': uuid.uuid4().hex,
                'title': title,
                'imageUrl': imageUrl,
                'url': url,
                'content': content,
                'author': author,
                'date': date,
                'time': time,
                'readMoreUrl': readMoreUrl
            }
            newsDictionary['data'].append(newsObject)
        except Exception:
            print(entry)
            */
