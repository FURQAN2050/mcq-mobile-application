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


  constructor( private screenshot: Screenshot,public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.student)
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
