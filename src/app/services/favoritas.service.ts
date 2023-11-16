import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticiaClase';

const PORT = '3000';
const favsURL: string = `http://localhost:${PORT}/favs`;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FavoritasService {
  constructor(private http: HttpClient) {}

  getFavs(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(favsURL);
  }

  postFav(noticia: Noticia): Observable<Noticia> {
    
    return this.http.post<Noticia>(favsURL, noticia, httpOptions);
  }

  deleteFav(noticia: Noticia): Observable<Noticia> {
    const deleteURL = `${favsURL}/${noticia.id}`
    return this.http.delete<Noticia>(deleteURL);
  }
}
