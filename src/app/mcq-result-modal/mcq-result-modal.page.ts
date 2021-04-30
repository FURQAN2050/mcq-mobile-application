import { Component, Input, OnInit } from '@angular/core';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-mcq-result-modal',
  templateUrl: './mcq-result-modal.page.html',
  styleUrls: ['./mcq-result-modal.page.scss'],
})
export class McqResultModalPage implements OnInit {
  @Input() totalMcqs: any;
  @Input() correctAnswers: any;
  @Input() wrongAnswers: any;
  @Input() student: any;
  @Input() chapter: any;
  @Input() percentage: any;
  title:string=""

  constructor( private screenshot: Screenshot,public modalController: ModalController) { }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  ngOnInit() {
    console.log(this.student)
    if(this.percentage>75){
      this.title = "Excellent!"
    }
    else if(this.percentage>50 && this.percentage<75){
      this.title = "Good Work!"
    }
    else{
      this.title = "Try again!"
    }
  }

  takeSS(){
    this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(onSuccess=>{
      this.modalController.dismiss();

    }, onError=>{
      console.log(onError)
      this.modalController.dismiss();

    });
  }

}
