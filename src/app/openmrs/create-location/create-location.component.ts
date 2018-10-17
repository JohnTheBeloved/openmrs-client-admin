import { Component, OnInit } from '@angular/core';
import { Location } from '../model/location';
import { LocationService } from '../service/location.service';


@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {

  private location : Location = {uuid:'', name: '',addressLine1:'', parent:{name:''}, addressLine2:'',locality:'', state:'',country:''}
  private parents: Location[] ;
  private locationSelectionOptions = {formatResult: (location) => {return location.name}}
  private counties :[{}];
  private states : [{}];
  private localities = [{}];

  constructor(private locationService: LocationService) {
   this.locationService.getLocations()
    .subscribe(locations => { this.parents = this.toSelectables(locations);})
  }

  ngOnInit() { 
  }

  onChange (a,b,c) {
    console.log(a,b,c)
  }

  onSelect() {}

  toSelectables(locations:Location[]): any[]  {
    return locations.map(location => {return {id: location.uuid, text: `${location.name} (${location.locality})`}})
  }


}
