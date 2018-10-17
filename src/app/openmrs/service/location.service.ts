import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HealthService } from './health.service'
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient,private health: HealthService) { }
  private locationsUrl = 'api/locations';

  /** GET locatons from the server */
  getLocations (): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationsUrl)
      .pipe(
        tap(heroes => this.health.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getLocation(id: number): Observable<Location> {
    const url = `${this.locationsUrl}/${id}`;
    return this.http.get<Location>(url)
      .pipe(
        tap(_ => this.health.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Location>(`getLocation id=${id}`))
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
