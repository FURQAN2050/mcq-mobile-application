import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:any={};

  constructor(public router:Router) { }

  ngOnInit() {
  }

  submit(){
    console.log(this.user);
  }

}
