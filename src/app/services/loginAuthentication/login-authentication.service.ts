import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService {

  constructor() { }
  private authSubject = new BehaviorSubject([]);

  public userAuthenticated(user: any) {
    console.log("my user in service" + user);
    this.authSubject.next(user);
  }
  public getAuthObservable() {
    return this.authSubject.asObservable();
  }
}
