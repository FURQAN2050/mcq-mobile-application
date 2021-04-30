import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../services/controllers/toast.service';
import { AccountApi } from '../shared/sdk';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user: any = [];

  constructor(private accountApi: AccountApi, public router: Router, public toastservice: ToastService) { }

  ngOnInit() {
  }


  submit() {

    let account = {
      username: this.user.name,
      password: this.user.password,
      email: this.user.email
    }
    if (this.user.name && this.user.email && this.user.password && (this.user.password == this.user.confirmPassword)) {
      this.accountApi.create(account).subscribe(res => {
        console.log(res)
      })
      this.toastservice.simpleToast("Account Created", 'bottom')
      this.router.navigateByUrl('/login')
    }
    else {
      // alert("Please Enter All Fields")
      this.toastservice.simpleToast("Please Enter All Fields", "danger")

    }
  }

}
