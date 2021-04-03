import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiSupportingServicesService } from '../services/ApiSupportingServices/api-supporting-services.service';
import { LoadingService } from '../services/LoadingService/loading.service';
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
    private supportingApis: ApiSupportingServicesService,
    public loadingController: LoadingController,
    public loaderService:LoadingService
  ) {}

  ngOnInit() {
    this.presentLoading(true);
    // this.loaderService.startLoader();
  }
  ionViewWillEnter() {
    this.classes = [];
    this.selectedClass = null;
    this.getClasses();
  }
  openSubjectPage() {
    if (this.classes.length > 0 && this.selectedClass != null) {
      console.log(this.selectedClass);
      let selectedClassId = this.selectedClass.id;
      this.router.navigateByUrl('/subject/' + selectedClassId);
    }
  }
  getClasses() {
    this.supportingApis.getClasses().subscribe((res) => {
      this.classes = res;
      console.log(res);
      console.log(this.selectedClass);
      this.presentLoading();
      // this.loaderService.closeLoader();
    },err=>{
      // this.loaderService.closeLoader();
    });
  }
  async presentLoading(startStopLoaderBool=false) {
    if(startStopLoaderBool){
       let loading = await this.loadingController.create({
        message: 'Please wait...',
       duration:3000
      });
        await loading.present();
    }
  }

}
