import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiSupportingServicesService } from '../services/ApiSupportingServices/api-supporting-services.service';
import { LoadingService } from '../services/LoadingService/loading.service';
import { ClassApi, SubjactApi } from '../shared/sdk';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage {
  selectedClass;
  selectedClassId;
  classes: any = [];
  selectedSubjectId;
  subjects: any = []
  showClass = false;
  showLoader = false;
  constructor(
    public router: Router,
    private classApi: ClassApi,
    private supportingApis: ApiSupportingServicesService,
    public loadingController: LoadingController,
    public loaderService: LoadingService,
    private subjectApi: SubjactApi) { }


  ionViewWillEnter() {
    this.classes = [];
    this.selectedClass = null;
    this.selectedClassId = null;
    this.getClasses();
    this.showClass = false;
    this.showLoader = false;
  }
  openSubjectPage(classDetails) {
    this.selectedClass = classDetails;
    this.showClass = true;
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 1200);
    if (this.classes.length > 0 && this.selectedClass != null) {
      console.log(this.selectedClass);
      this.selectedClassId = this.selectedClass.id;
      // this.router.navigateByUrl('/subject/' + selectedClassId);
      this.getSubjects();
    }
  }

  getClasses() {
    this.presentLoading().then(loader => {
      loader.present()
      this.supportingApis.getClasses().subscribe((res) => {
        this.classes = res;
        console.log(res);
        console.log(this.selectedClass);
        if (res?.length > 0) {
          loader.dismiss();
        }
      }, err => {
        loader.dismiss();
      });
    });
  }

  async presentLoading() {
    let loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    return loading;

  }

  openChapterPage() {
    console.log(this.selectedSubjectId)
    let id = this.selectedSubjectId.id
    this.router.navigateByUrl('/chapter/' + id)
    console.log(id)
  }

  getSubjects() {
    let filter = {
      where: { classId: this.selectedClassId }
    }
    this.subjectApi.find(filter).subscribe(res => {
      this.subjects = res
      console.log(this.subjects)

    })
  }
}
