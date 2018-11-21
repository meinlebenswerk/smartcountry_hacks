import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class UserdataService {



  userAuthChange: Subject<boolean>;
  isUserAutheticated: boolean;

  constructor() {
    this.isUserAutheticated = false;
    this.userAuthChange = new Subject();
   }



}
