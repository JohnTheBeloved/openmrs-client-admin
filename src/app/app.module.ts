import { BrowserModule } from '@angular/platform-browser';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderWidgetComponent,
    PageNumComponent
  ],
  imports: [
    BrowserModule,
    NgxAdminLteModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [  ]
})
export class AppModule { }

