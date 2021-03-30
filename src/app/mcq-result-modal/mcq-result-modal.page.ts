import { Component, Input, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
    console.log(this.student)
  }

}
