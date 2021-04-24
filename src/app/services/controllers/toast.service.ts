import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) {}

  async simpleToast(message,color?) {
    const toast = await this.toastController.create({
      message:message,
      duration: 2000,
      animated: true,
      color:color
    });
    toast.present();
  }
}
