import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/openmrs/model/location';
import { BreadcrumbService } from 'ngx-admin-lte';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from 'src/app/openmrs/service/location.service';

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.css']
})
export class ViewLocationComponent implements OnInit {

  private location: Location;
  constructor(private service: LocationService, private breadServ: BreadcrumbService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    const id = this.route.snapshot.params['uuid']
    this.getLocation(id);
  }

  getLocation(id){
    this.service.getLocation(id)
      .subscribe(location => {
        this.location = location;
        console.log(90, location);
        this.setBreadCrumbLinks(location);
      })
  }

  setBreadCrumbLinks(location: Location){
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
          link: [`/location/view/${location.uuid}`],
          title: 'View'
        }
      ]
    });
  }

}
