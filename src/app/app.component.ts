import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_VERSION, BASE_URL } from './base.url';
import { ApiSupportingServicesService } from './services/ApiSupportingServices/api-supporting-services.service';
import { LoginAuthenticationService } from './services/loginAuthentication/login-authentication.service';
import { LoopBackAuth, LoopBackConfig } from './shared/sdk';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit  {
  public appPages = [
    { title: ' Start Mcqs', url: 'class', icon: 'list' },
    { title: 'login', url: '/login', icon: 'log-in' },
    { title: 'Signup', url: '/signup', icon: 'create' },
  ];
  currentUser: any=null;
  constructor(
    private auth: LoopBackAuth,
    public loginAuth: LoginAuthenticationService,
    private router: Router,
    public apisupportingHelperClass:ApiSupportingServicesService) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    this.initialize();
    this.setloggedInUser();
  }
  ngOnInit() {
    this.getLoggedInUser();
  }

  getLoggedInUser(){
    this.loginAuth.getAuthObservable().subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    })
  }

  setloggedInUser() {
    this.currentUser = this.auth.getCurrentUserData();
    this.loginAuth.userAuthenticated(this.currentUser);
  }

  initialize(){
    this.apisupportingHelperClass.setClasses();
  }

  logout() {
    this.auth.clear();
    this.currentUser = null;
    this.loginAuth.userAuthenticated(null);
    this.router.navigateByUrl('/main');
  }


}
