import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DolarService {
  private apiUrl = 'https://dolarapi.com/v1/dolares';
  private apiUrlOtras ='https://dolarapi.com/v1/cotizaciones';

  constructor(private http: HttpClient) {}

  getDolarBlue(): Observable<any> {
    return this.http.get(`${this.apiUrl}/blue`);
  }

  getDolarOficial(): Observable<any> {
    return this.http.get(`${this.apiUrl}/oficial`)
  }

  getDolarBolsa(): Observable<any> {
    return this.http.get(`${this.apiUrl}/bolsa`)
  }

  getDolarTarjeta(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tarjeta`)
  }

  getDolarCCL(): Observable <any>{
    return this.http.get(`${this.apiUrl}/ccl`)
  }

  getEuro(): Observable <any>{
    return this.http.get(`${this.apiUrlOtras}/eur`)
  }

  getReal(): Observable <any>{
    return this.http.get(`${this.apiUrlOtras}/brl`)
  }

  getPesoChileno(): Observable <any>{
    return this.http.get(`${this.apiUrlOtras}/clp`)
  }

  getPesoUru(): Observable <any>{
    return this.http.get(`${this.apiUrlOtras}/uyu`)
  }
}