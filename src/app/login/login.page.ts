import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthenticationService } from '../services/loginAuthentication/login-authentication.service';
import { AccountApi, LoopBackAuth } from '../shared/sdk';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;
  constructor(public router: Router, private accountApi: AccountApi, private loginAuth: LoginAuthenticationService, public auth: LoopBackAuth) { }

  ngOnInit() {
  }

  submit() {
    if (this.email && this.password) {
      this.accountApi.login({ email: this.email, password: this.password }).subscribe(token => {
        this.auth.save();
        let user: any = this.auth.getCurrentUserData();
        console.log(user.id)

        // let filter={
        //   where:{id:user.id}
        // }

        this.accountApi.findById(user.id).subscribe((accountProfile: any) => {
          console.log(accountProfile);

          if (accountProfile != null) {
            console.log(user)
            this.auth.setUser(user);
            this.loginAuth.userAuthenticated(user);
            this.router.navigateByUrl('/class')
          }

        })



      }, err => {
        alert("Email or password is incorrect");
      })
    }
    else {
      alert('Please fill all fields')
    }


  }

}
