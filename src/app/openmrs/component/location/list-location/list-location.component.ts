import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'ngx-admin-lte';
import { LocationService } from '../../../service/location.service';
import { Location } from '../../../model/location';

@Component({
  selector: 'app-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.css']
})
export class ListLocationComponent implements OnInit {
  private locations : Location[]
  constructor(private locationService: LocationService, private breadServ: BreadcrumbService) { }

  ngOnInit() {
    this.breadServ.setCurrent({
      description: 'List',
      display: true,
      header: 'Locations',
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: 'Home'
        },
        {
          icon: 'map-marker',
          link: ['/location'],
          title: 'Location'
        },
        {
          icon: 'list',
          link: ['/location/list'],
          title: 'List'
        }
      ]
    });
    this.getLocations()
  }

  getLocations(): void {
    this.locationService.getLocations()
    .subscribe(locations => this.locations = locations)
  }

}
