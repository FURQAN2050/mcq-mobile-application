import { Component } from '@angular/core';
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
  constructor() {}
}
