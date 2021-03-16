import { Component } from '@angular/core';
import { API_VERSION, BASE_URL } from './base.url';
import { ApiSupportingServicesService } from './services/ApiSupportingServices/api-supporting-services.service';
import { LoopBackConfig } from './shared/sdk';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: ' Start Mcqs', url: 'class', icon: 'trending-up' },
    { title: 'login', url: '/login', icon: 'log-in' },
    { title: 'Signup', url: '/signup', icon: 'create' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public apisupportingHelperClass:ApiSupportingServicesService) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    this.initialize();
  }
  initialize(){
    this.apisupportingHelperClass.setClasses();
    // this.apisupportingHelperClass.setSubjects();
  }
}
