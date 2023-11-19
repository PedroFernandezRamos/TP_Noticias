import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, throwError } from 'rxjs';
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
    //@todo check if there is a noticia in the array of the db
    return this.getFavs().pipe(
        switchMap((noticiasFavoritas) => {
            if (noticiaGuardada(noticiasFavoritas, noticia)) {
                return throwError('La noticia ya se encontraba guardada...');
            }
            return this.http.post<Noticia>(favsURL, noticia, httpOptions);
        })
    );
}

  deleteFav(noticia: Noticia): Observable<Noticia> {
    const deleteURL = `${favsURL}/${noticia.id}`;
    return this.http.delete<Noticia>(deleteURL);
  }
}

const areNoticiasEqual = (noticia1: Noticia, noticia2: Noticia): boolean => {
  const keys = Object.keys(noticia1).filter((key) => key !== 'id') as Array<
    keyof Noticia
  >;

  for (const key of keys) {
    const value1 = noticia1[key];
    const value2 = noticia2[key];

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

const noticiaGuardada = (
  favoritas: Noticia[],
  noticia: Noticia
): boolean => {
  return favoritas.some((fav) => areNoticiasEqual(fav, noticia));
};
