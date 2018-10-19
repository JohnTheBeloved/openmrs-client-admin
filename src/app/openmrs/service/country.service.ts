import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';
import { HealthService } from './health.service';
import { Country } from '../model/country'
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  

  constructor(private http: HttpClient, private health: HealthService) { }
  private countriesUrl = 'api/countries';

   /** GET locatons from the server */
   getCountries (): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl)
      .pipe(
        tap(heroes => this.health.log('fetched countries')),
        catchError(this.handleError('getCountries', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
        console.error(error);
        this.health.log(`${operation} failed : ${error.message}`)
        return of(result as T)
    }
  }
}

