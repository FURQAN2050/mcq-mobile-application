import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { McqApi } from '../shared/sdk';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  selectedChapterId
  mcqs:any=[];
  currentMcq:any={};
  crrentMcqIndex=0;
  Answer:any=[]
  selectedsubjectId




  constructor( public router:Router, public toast:ToastService,private activatedRoute: ActivatedRoute,private mcqApi:McqApi) { }
  ngOnInit() {
    this.selectedChapterId = this.activatedRoute.snapshot.paramMap.get('chapterid');
    // this.selectedsubjectId=  this.activatedRoute.snapshot.paramMap.get('subjectid')
    console.log(this.selectedChapterId)
    this.getMcqs()

  }

  getMcqs(){
    this.mcqApi.find().subscribe(res=>{
      console.log(res)
      this.mcqs=res;
      this.currentMcq=this.mcqs[this.crrentMcqIndex];

    })
  }

  checkedOne(e) {
    console.log(e);
    if (e.detail.checked) {
      this.Answer.name2 = false;
      this.Answer.name3 = false;
      this.Answer.name4 = false;
    }
  }
  checkedTwo(e) {
    console.log(e);
    if (e.detail.checked) {
      this.Answer.name1 = false;
      this.Answer.name3 = false;
      this.Answer.name4 = false;
    }
  }
  checkedThree(e) {
    console.log(e);
    if (e.detail.checked) {
      this.Answer.name2 = false;
      this.Answer.name1 = false;
      this.Answer.name4 = false;
    }
  }
  checkedFour(e) {
    console.log(e);
    if (e.detail.checked) {
      this.Answer.name2 = false;
      this.Answer.name3 = false;
      this.Answer.name1 = false;
    }
  }

  submit() {

    //add the logic to check the correct ans
    let SelectedAnswer = {};
    if (this.Answer.name1 == true) {
      SelectedAnswer = this.currentMcq.opt1;
    }
    if (this.Answer.name2 == true) {
      SelectedAnswer = this.currentMcq.opt2;
    }
    if (this.Answer.name3 == true) {
      SelectedAnswer = this.currentMcq.opt3;
    }
    if (this.Answer.name4 == true) {
      SelectedAnswer = this.currentMcq.opt4;
    }

    if (SelectedAnswer == this.currentMcq.ans) {
      this.toast.simpleToast("Correct Answer");
    }

    this.crrentMcqIndex++;

    if (this.crrentMcqIndex == this.mcqs.length) {
      alert("All Mcq's Done");
      // this.router.navigateByUrl('/chapter/'+this.selectedsubjectId);
    }
    this.currentMcq = this.mcqs[this.crrentMcqIndex];
    this.Answer.name1 = false
    this.Answer.name2 = false
    this.Answer.name3 = false
    this.Answer.name4 = false
  }



}



