import { Component, OnInit } from '@angular/core';
import { Location } from '../../../model/location';
import { LocationService } from '../../../service/location.service';
import { StateService } from '../../../service/state.service';
import { LocalityService } from '../../../service/locality.service';
import { CountryService } from '../../../service/country.service';
import { Selectable } from '../../../model/selectable'


@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {

  private location : Location;
  private parents: Selectable[] ;
  private countries : Selectable[];
  private states : Selectable[];
  private localities : Selectable[];

  constructor(private locationService: LocationService, private localityService: LocalityService,
     private stateService: StateService,
    private countryService: CountryService) {
  }

  ngOnInit() { 
    this.fetchPresets();
  }

  stateChanged (state) {
    this.localityService.getStateLocalities(state.id)
    .subscribe((localities) => {console.log(23, localities); this.localities = localities.map(locality => {return {id: locality.uuid, text: locality.name}})})
  }

  onSelect (doc) {
    console.log(doc)
  }

  fetchPresets () {
    this.locationService.getLocations()
    .subscribe(locations => { this.parents = locations.
      map(location => {return {id: location.uuid, text: `${location.name} (${location.locality})`}});
    })
  
    this.stateService.getStates()
    .subscribe(states => { this.states = states.map(state => {console.log(342, state); return { id: state.uuid, text: state.name }} )})
  
    this.countryService.getCountries()
    .subscribe(countries => { this.countries = countries.map(country => {return { id: country.uuid, text: country.name }} )})
  }


}
