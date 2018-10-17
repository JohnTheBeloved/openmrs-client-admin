import { Component, OnInit, OnChanges } from '@angular/core';
import { BreadcrumbService } from 'ngx-admin-lte';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  constructor(private breadServ: BreadcrumbService) { }

  ngOnInit() {
      // setttings the header for the home
      this.breadServ.setCurrent({
        description: 'HomePage',
        display: true,
        header: 'Dashboard',
        levels: [
          {
            icon: 'dashboard',
            link: ['/'],
            title: 'Home'
          }
        ]
      });
  }

  ngOnChanges(){

  }

}
