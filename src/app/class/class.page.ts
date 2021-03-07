import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {
  selectedClassId=123;

  constructor( public router: Router) { }

  ngOnInit() {
  }
  subject(){
    this.router.navigateByUrl('/subject/'+this.selectedClassId)
  }

}
