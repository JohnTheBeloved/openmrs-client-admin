import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Location } from './openmrs/model/location';
import { Observable, of } from 'rxjs';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const locations = [
        { 
            uuid: '11', 
            name: 'Nigeria Primary Healthcare Board', 
            parent: null, 
            address: 'No 10 Kufekufe Street, Area 12, Abuja', 
            locale: 'Area 12', 
            state: 'Abuja'
        }
    ];
    const states = [
      { uuid: 1, name: "Abia"},
      { uuid: 1, name: "Adamawa"},
      { uuid: 1, name: "Anambra"},
      { uuid: 1, name: "Akwa Ibom"},
      { uuid: 1, name: "Bauchi"},
      { uuid: 1, name: "Bayelsa"},
      { uuid: 1, name: "Benue"},
      { uuid: 1, name: "Borno"},
      { uuid: 1, name: "Cross River"},
      { uuid: 1, name: "Delta"},
      { uuid: 1, name: "Ebonyi"},
      { uuid: 1, name: "Enugu"},
      { uuid: 1, name: "Edo"},
      { uuid: 1, name: "Ekiti"},
      { uuid: 1, name: "FCT - Abuja"},
      { uuid: 1, name: "Gombe"},
      { uuid: 1, name: "Imo"},
      { uuid: 1, name: "Jigawa"},
      { uuid: 1, name: "Kaduna"},
      { uuid: 1, name: "Kano"},
      { uuid: 1, name: "Katsina"},
      { uuid: 1, name: "Kebbi"},
      { uuid: 1, name: "Kogi"},
      { uuid: 1, name: "Kwara"},
      { uuid: 1, name: "Lagos"},
      { uuid: 1, name: "Nasarawa"},
      { uuid: 1, name: "Niger"},
      { uuid: 1, name: "Ogun"},
      { uuid: 1, name: "Ondo"},
      { uuid: 1, name: "Osun"},
      { uuid: 1, name: "Oyo"},
      { uuid: 1, name: "Plateau"},
      { uuid: 1, name: "Rivers"},
      { uuid: 1, name: "Sokoto"},
      { uuid: 1, name: "Taraba"},
      { uuid: 1, name: "Yobe"},
      { uuid: 1, name: "Zamfara"}
    ]
    return {locations,states};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(locations: Location[]): number {
    return locations.length > 0 ? Math.max(...locations.map(location => parseInt(location.uuid) + 1)) : 11;
  }

}