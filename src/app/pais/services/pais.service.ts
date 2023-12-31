import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
private apiUrl:string='https://restcountries.com/v3.1';
  constructor( private http:HttpClient) { }

  get httpParams(){

    return new HttpParams().set
    ('fields',',name,capital,flag,population,cca2,translations,ccn3');
  }
  buscarPais(termino:string):Observable<Country[]>{
    const url=`${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
               
  }

  buscarCapital(capital:string):Observable<Country[]>{
const url=`${this.apiUrl}/capital/${capital}`;
return this.http.get<Country[]>(url,{params:this.httpParams});

  }

  getPaisporAlpha(id:string):Observable<Country>{
    const url=`${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url,{params:this.httpParams});
    
  }

  getBuscarRegion(region:string):Observable<Country[]>{
    const url=`${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }
}
