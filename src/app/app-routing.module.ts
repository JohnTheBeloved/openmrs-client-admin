import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanActivateGuard, LayoutAuthComponent } from 'ngx-admin-lte';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';
import { HeaderWidgetComponent } from './header-widget/header-widget.component';
import { PageNumComponent } from './page-num/page-num.component';




const routes: Routes = [
  // logged routes
  {
    canActivate: [AuthGuard],
    children: [
      {
        canActivate: [AuthGuard],
        component: HomeComponent,
        path: 'home'
      },
      {
        canActivate: [CanActivateGuard],
        component: PageNumComponent,
        path: 'page/:id'
      },
    ],
    component: LayoutAuthComponent,
    data: [{
        'skin': 'skin-black',
        'display_user': false,
        'display_notifications': false,
        'display_messages': false,
        'display_tasks': false,
        'header_components': [{
          class: HeaderWidgetComponent,
          data: {
            label: 'test widget'
          }
        }]
        /*
        // USE THIS IS YOU WANT TO HIDE SOME TEMPLATE PART
        'boxed_style': false,
        'display_tasks': false,
        'display_control': false,
        'display_user': false,
        'display_messages': false,
        'display_notifications': false,
        'display_menu_user': false,
        'display_menu_search': false,
        'display_logout': true,
        header_components: []
        */
      }],
    path: '',
  },
  // not logged routes
  {
    component: LoginComponent,
    path: 'login'
  },
  // {
  //   component: RegisterComponent,
  //   path: 'register'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
