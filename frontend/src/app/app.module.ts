import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HomeDynamicComponent } from './views/home-dynamic/home-dynamic.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { LoginComponent } from './views/login/login.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import { RequestListDynamicComponent } from './components/request-list-dynamic/request-list-dynamic.component';
import { RequestDetailsComponent } from './views/request-details/request-details.component';
import { NewRequestComponent } from './views/new-request/new-request.component';
import { RequestDetailsStatusComponent } from './components/request-details-status/request-details-status.component';
import { NewRequestDynamicComponent } from './views/new-request-dynamic/new-request-dynamic.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from './../environments/environment';


//userdata service:
import { UserdataService } from './services/userdata.service';

//test service::
import { AuthService } from './services/auth.service';
import { RequestEndComponent } from './component/request-end/request-end.component';
import { RequestsortPipe } from './pipes/requestsort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDynamicComponent,
    HeaderComponent,
    FilterComponent,
    LoginComponent,
    RequestListComponent,
    RequestListDynamicComponent,
    RequestDetailsComponent,
    NewRequestComponent,
    RequestDetailsStatusComponent,
    RequestEndComponent,
    NewRequestDynamicComponent,
    RequestsortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebase, 'smartcountry-dev'),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  providers: [ UserdataService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
