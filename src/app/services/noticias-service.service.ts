import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiasServiceService {
  apiKey = '98e75c81bc2a46bda3be4e2d6a695820'; //key de fede
  //corsPrefix = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}

  //NO PODEMOS USAR MEDIASTACK POR LOS CORS

  getNoticias(): Observable<any> {
    const URL =
      
      'https://newsapi.org/v2/everything?q=keyword&apiKey=' +
      this.apiKey;
    return this.http.get(URL);
  }

  getNoticiasPorCategoria(categoria: String): Observable<any> {
    const URL =
      'https://newsapi.org/v2/top-headlines?category=' +
      categoria +
      '&apiKey=' +
      this.apiKey;
    return this.http.get(URL);
  }

  getNoticiasPorPais(pais: String): Observable<any> {
    const URL =
      'https://newsapi.org/v2/top-headlines?country=' +
      pais +
      '&apiKey=' +
      this.apiKey;
    return this.http.get(URL);
  }

  getNoticiasPorFuente(fuente: String): Observable<any> {
    const URL =
      'https://newsapi.org/v2/top-headlines?sources=' +
      fuente +
      '&apiKey=' +
      this.apiKey;
    return this.http.get(URL);
  }

  getNoticiasPorPalabraClave(palabra: String): Observable<any> {
    const URL =
      'https://newsapi.org/v2/everything?q=' +
      palabra +
      '&apiKey=' +
      this.apiKey;
    return this.http.get(URL);
  }

  getNoticiasPorFecha(
    fechaInicio: String,
    fechaFinal: String
  ): Observable<any> {
    const URL =
      'https://newsapi.org/v2/everything?q=a&from=' +
      fechaInicio +
      '&to=' +
      fechaFinal +
      '&apiKey=' +
      this.apiKey; /// el q=a es porque no te deja buscar por fecha nada mas entonces agregue como palabra clave una a
    return this.http.get(URL);
  }
}

/// REQUISITOS FUNCIONALES QUE NOS PIDIERON:
/// -El sistema debe permitir que el usuario vea noticias generales (más nuevas)
/// -El sistema debe permitir que el usuario busque noticias por categoría
/// -El sistema debe permitir que el usuario busque noticias por fuente (escrito)
/// -El sistema debe permitir que el usuario guarde noticias favoritas para ver más tarde
