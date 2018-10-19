import { Component, OnInit, OnChanges } from '@angular/core';
import { MenuService } from 'ngx-admin-lte';

@Component({
  selector: 'app-menu-widget',
  templateUrl: './menu-widget.component.html',
  styleUrls: ['./menu-widget.component.css']
})
export class MenuWidgetComponent implements OnInit, OnChanges {

  constructor(private menuService: MenuService) { 
    
 
  }
 private mylinks = [
      {
        class: MenuWidgetComponent,
        data: {
          label: 'Homey'
        }
      }
    ]
  
  ngOnInit() {
    this.menuService.setCurrent(this.mylinks);
  }

   ngOnChanges() {

  }

}
