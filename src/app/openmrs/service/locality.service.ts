import { Injectable } from '@angular/core';
import { StateService } from './state.service'
import { HealthService } from './health.service'
import { Observable, Observer, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalityService {

  constructor(private stateService: StateService, private health: HealthService) { }

  getStateLocalities(uuid) : Observable<{name:string, uuid:string}[]> {
    return Observable.create((observer: Observer<{name:string, uuid:string}[]>) => {
      return this.stateService.getStates()
        .subscribe(states => {
          const localities = states.find((state) => state.uuid.toString() === uuid).locals 
          observer.next(localities)
          observer.complete()
        }, err => observer.error(err))
    }); 
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.health.log(`${operation} failed : ${error.message}`)
      return of(result as T)
    }
  }
  
}
