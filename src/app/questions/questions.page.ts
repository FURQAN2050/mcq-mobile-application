import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  constructor() { }
  ngOnInit() {

  }
  Answer:any=[]
  isChecked:any;
  question = "The University of Waterloo does NOT have a building of this name?";

  // name1 = "B.C. Matthews Hall";
  // name2 = "Carl A. Pollock Hall";
  // name3 = "I.L. Neilson Hall";
  // name4 = "Douglas Wright Engineering";
  choices:any=[
    {name:"B.C. Matthews Hall"},
    {name:"Carl A. Pollock Hall"},
    {name:"I.L. Neilson Hall"},
    {name:"Douglas Wright Engineering"}

  ];
  confirm(e){

    if(e.detail.value=this.Answer[0]){
      this.Answer=false;

    }

  }
}





  // checkedOne(e) {
  //   console.log(e);
  //   if (e.detail.checked) {
  //     this.Answer.name2 = false;
  //     this.Answer.name3 = false;
  //     this.Answer.name4 = false;
  //   }
  // }
  // checkedTwo(e) {
  //   console.log(e);
  //   if (e.detail.checked) {
  //     this.Answer.name1 = false;
  //     this.Answer.name3 = false;
  //     this.Answer.name4 = false;
  //   }
  // }
  // checkedThree(e) {
  //   console.log(e);
  //   if (e.detail.checked) {
  //     this.Answer.name2 = false;
  //     this.Answer.name1 = false;
  //     this.Answer.name4 = false;
  //   }
  // }
  // checkedFour(e) {
  //   console.log(e);
  //   if (e.detail.checked) {
  //     this.Answer.name2 = false;
  //     this.Answer.name3 = false;
  //     this.Answer.name1 = false;
  //   }
  // }

