import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiSupportingServicesService } from '../services/ApiSupportingServices/api-supporting-services.service';
import { ClassApi } from '../shared/sdk';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {
  selectedClass;
  classes: any = [];

  constructor(
    public router: Router,
    private classApi: ClassApi,
    private supportingApis: ApiSupportingServicesService
  ) {}

  ngOnInit() {
    this.getClasses();
  }
  openSubjectPage() {
    console.log(this.selectedClass)
    let selectedClassId=this.selectedClass.id;
    this.router.navigateByUrl('/subject/' + selectedClassId);
  }
  getClasses() {
    this.supportingApis.getClasses().subscribe(res=>{
      this.classes=res;
      console.log(res)
      console.log(this.selectedClass)
    })
    // this.classApi.find().subscribe(res=>{
    //   this.classes=res;
    //   console.log(this.classes)
    // })
  }
}
