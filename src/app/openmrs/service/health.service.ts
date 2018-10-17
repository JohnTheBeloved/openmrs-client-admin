import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor() { }

  public log (message){
    console.log(message)
  }
}
