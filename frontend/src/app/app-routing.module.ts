import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './views/home/home.component';

import {HomeDynamicComponent} from './views/home-dynamic/home-dynamic.component';

import {LoginComponent} from "./views/login/login.component";
import {RequestDetailsComponent} from "./views/request-details/request-details.component";
import {NewRequestComponent} from "./views/new-request/new-request.component";
import { NewRequestDynamicComponent } from './views/new-request-dynamic/new-request-dynamic.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'request-details',
    component: RequestDetailsComponent
  },
  {
    path: 'home-dynamic',
    component: HomeDynamicComponent
  },
  {
    path: 'new-request',
    component: NewRequestComponent
  },
  {
    path: 'new-request-dynamic',
    component: NewRequestDynamicComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
