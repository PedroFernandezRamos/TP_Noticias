import { Component } from '@angular/core';
import { NoticiasServiceService } from './services/noticias-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-noticias';
  listadoDeNoticias: any[] = [];
  loading = false;

  constructor(private _api: NoticiasServiceService){

  }

  buscarNoticias(parametro: any){
    this.loading = true;
    this.listadoDeNoticias=[];

    setTimeout(() => {
      console.log(parametro);
    this._api.getNoticias(parametro).subscribe(resultado=>
      {
        console.log(resultado);
        this.loading = false;
        this.listadoDeNoticias = resultado.articles;
      }
      );
    }, 1000);
    
  }
}