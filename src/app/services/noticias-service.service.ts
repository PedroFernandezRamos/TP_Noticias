import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasServiceService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=5e95f7e999e544fbbbcb323fb25b0102';
    return this.http.get(URL);
  }


/// claro cada filtro seria otra funcion con la url y pasando por parametro lo que necesitamos 
///     http://api.mediastack.com/v1/news?access_key=e854c6798c3818a4cdb0e1610a918ee1&categories=general

//yo lo haria asi, supongo que es como se hace 
  //Hacemos este endpoint para noticias generales? Y otros para cada categoría?
  /*
  getNoticias(): Observable<any>{
    const URL = 'http://api.mediastack.com/v1/news?access_key=e854c6798c3818a4cdb0e1610a918ee1';
    return this.http.get(URL);
  }

  getNoticiasPorCategoria(categoria: String): Observable<any>{
    const URL = 'http://api.mediastack.com/v1/news?access_key=e854c6798c3818a4cdb0e1610a918ee1&categories='+categoria;
    return this.http.get(URL);
  }

  getNoticiasPorFuente(fuente: String): Observable<any>{
    const URL = 'http://api.mediastack.com/v1/news?access_key=e854c6798c3818a4cdb0e1610a918ee1&sources='+fuente;
    return this.http.get(URL);
  }*/


}


/// REQUISITOS FUNCIONALES QUE NOS PIDIERON: 
/// -El sistema debe permitir que el usuario vea noticias generales (más nuevas) 
/// -El sistema debe permitir que el usuario busque noticias por categoría
/// -El sistema debe permitir que el usuario busque noticias por fuente (escrito)
/// -El sistema debe permitir que el usuario guarde noticias favoritas para ver más tarde
