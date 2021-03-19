import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountServiceService } from '../accountService/account-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService {

  constructor(private accountService:AccountServiceService) { }
  private authSubject = new BehaviorSubject([]);
  
  public userAuthenticated(user: any) {
    console.log("my user in service" + user);
    this.authSubject.next(user);
    
    if(user!=null){
      this.accountService.setAccountProfile(user);
    }
  }
  public getAuthObservable() {
    return this.authSubject.asObservable();
  }
}
