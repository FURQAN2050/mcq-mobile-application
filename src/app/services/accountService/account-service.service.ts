import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountApi } from 'src/app/shared/sdk';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  private accountSubject = new BehaviorSubject([]);
  
  constructor(public accountApi:AccountApi) { }
  public setAccountProfile(user: any) {
    let filter={
      where:{id:user.id}
    }
    this.accountApi.find(filter).subscribe(accountProfile=>{
      console.log(accountProfile);
      this.accountSubject.next(accountProfile);
    })
  }
  public getAccountProfile() {
    return this.accountSubject.asObservable();
  }
}
