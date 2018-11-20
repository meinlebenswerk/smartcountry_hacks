import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import {HomeDynamicComponent} from './views/home-dynamic/home-dynamic.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { LoginComponent } from './views/login/login.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import { RequestListDynamicComponent } from './components/request-list-dynamic/request-list-dynamic.component';
import { RequestDetailsComponent } from './views/request-details/request-details.component';
import { NewRequestComponent } from './views/new-request/new-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDynamicComponent
    HeaderComponent,
    FilterComponent,
    LoginComponent,
    RequestListComponent,
    RequestListDynamicComponent,
    RequestDetailsComponent,
    NewRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
