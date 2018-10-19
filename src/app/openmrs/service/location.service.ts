import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError, tap, mergeMap } from 'rxjs/operators';
import { HealthService } from './health.service'
import { Location } from '../model/location';
import { Attribute } from 'src/app/attribute';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient,private health: HealthService) { }
  private locationsUrl = 'api/locations';
  private locationsAttributeUrl = 'api/location_attributes';

  /** GET locatons from the server */
  getLocations (): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationsUrl)
      .pipe(
        tap(locations => this.health.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getLocation(uuid: string): Observable<Location> {
    const location_url = `${this.locationsUrl}?uuid=${uuid}`;
    const location_attribute_url = `${this.locationsAttributeUrl}`;
    const httpLocation = this.http.get<Location>(location_url)
    const httpLocationAttributes = this.http.get<Attribute[]>(location_attribute_url)
    return forkJoin([httpLocation, httpLocationAttributes])
      .map(results => {console.log(87, results); results[0][0].attributes = results[1]; return results[0][0]; })
      .pipe(
        tap( results => this.health.log(`fetched hero id=${uuid}`)),
        catchError(this.handleError<Location>(`getLocation id=${uuid}`))
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
