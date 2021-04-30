import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async simpleToast(message, position) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      animated: true,
      position: position
    });
    toast.present();
  }
}
