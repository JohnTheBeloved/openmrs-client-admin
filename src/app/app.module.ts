import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxAdminLteModule, LayoutLoginComponent } from 'ngx-admin-lte';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';
import { HeaderWidgetComponent } from './header-widget/header-widget.component';
import { PageNumComponent } from './page-num/page-num.component';
import { ListLocationComponent } from './openmrs/component/location/list-location/list-location.component';
import { MenuWidgetComponent } from './widget/menu-widget/menu-widget.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { CreateLocationComponent } from './openmrs/component/location/create-location/create-location.component';
import { Select2Component } from './angular-select2-component';
import { FormsModule } from '@angular/forms';
import { RadioSelectComponent } from './widget/radio-select/radio-select.component';
import { ListSelectComponent } from './widget/list-select/list-select.component';
import { MultiListSelectComponent } from './widget/multi-list-select/multi-list-select.component';
import { ViewLocationComponent } from './openmrs/component/location/view-location/view-location.component';


@NgModule({
  declarations: 
  [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderWidgetComponent,
    PageNumComponent,
    ListLocationComponent,
    MenuWidgetComponent,
    CreateLocationComponent,
    Select2Component,
    RadioSelectComponent,
    ListSelectComponent,
    MultiListSelectComponent,
    ViewLocationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgxAdminLteModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent, MenuWidgetComponent],
  exports: [  ]
})
export class AppModule { }