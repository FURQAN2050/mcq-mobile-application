import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loader = null;
  constructor() {}

  // async startLoader() {
  //   this.loader = await this.loadingController.create({
  //     cssClass: 'my-custom-class',
  //     message: 'Please wait...',
  //   });
  //   await this.loader.present();
  // }
  // async closeLoader() {
  //   if (this.loader != null) {
  //     await this.loadingController.dismiss();
  //   }
  // }
}
