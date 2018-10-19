import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor() { }

  public log (message, object: any = {message: message}){
    console.log(message, object)
  }
}
