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
import { LocationComponent } from './openmrs/location/location.component';
import { MenuWidgetComponent } from './widgets/menu-widget/menu-widget.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { CreateLocationComponent } from './openmrs/create-location/create-location.component';
import { Select2Component } from './angular-select2-component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: 
  [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderWidgetComponent,
    PageNumComponent,
    LocationComponent,
    MenuWidgetComponent,
    CreateLocationComponent,
    Select2Component
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