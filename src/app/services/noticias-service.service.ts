import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasServiceService {

  constructor(private http: HttpClient) { }

  //NO PODEMOS USAR MEDIASTACK POR LOS CORS

  getNoticias(): Observable<any>{
    const URL = 'https://newsapi.org/v2/everything?q=keyword&apiKey=8688eb84ac2c45cc888fcb7aa2b81d0d';
    return this.http.get(URL);
  }

  getNoticiasPorCategoria(categoria: String): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?category='+categoria+'&apiKey=8688eb84ac2c45cc888fcb7aa2b81d0d';
    return this.http.get(URL);
  }

  getNoticiasPorPais(pais: String): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='+pais+'&apiKey=8688eb84ac2c45cc888fcb7aa2b81d0d';
    return this.http.get(URL);
  }

  getNoticiasPorFuente(fuente: String): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?sources='+fuente+'&apiKey=8688eb84ac2c45cc888fcb7aa2b81d0d';
    return this.http.get(URL);
  }


}


/// REQUISITOS FUNCIONALES QUE NOS PIDIERON: 
/// -El sistema debe permitir que el usuario vea noticias generales (más nuevas) 
/// -El sistema debe permitir que el usuario busque noticias por categoría
/// -El sistema debe permitir que el usuario busque noticias por fuente (escrito)
/// -El sistema debe permitir que el usuario guarde noticias favoritas para ver más tarde

