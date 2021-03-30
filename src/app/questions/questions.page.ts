import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { McqResultModalPage } from '../mcq-result-modal/mcq-result-modal.page';
import { LoginAuthenticationService } from '../services/loginAuthentication/login-authentication.service';
import { LoopBackAuth, McqApi } from '../shared/sdk';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  selectedChapterId
  mcqs: any = [];
  currentMcq: any = {};
  crrentMcqIndex = 0;
  Answer: any = []
  selectedsubjectId;

  correctAnswerCount:any = 0;
  currentUser:any={};




  constructor(
    public loginAuth: LoginAuthenticationService,
    public modalController: ModalController,public router: Router, public toast: ToastService, private activatedRoute: ActivatedRoute, private mcqApi: McqApi) { }
  ngOnInit() {

    this.selectedChapterId = this.activatedRoute.snapshot.paramMap.get('chapterid');
    console.log(this.selectedChapterId)
    this.getMcqs()
    this.getLoggedInUser();
  }
  ionViewWillEnter(){
    console.log("Ion view will enter called");
    this.selectedChapterId=null;
    this.mcqs= [];
    this.currentMcq = {};
    this.crrentMcqIndex = 0;
    this.Answer= []
    this.selectedsubjectId;
    this.correctAnswerCount = 0;
  }
  getLoggedInUser(){
    this.loginAuth.getAuthObservable().subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    })
  }

  getMcqs() {
    let filter={where:{chapterId:this.selectedChapterId},
    include:['chapter']}
    this.mcqApi.find(filter).subscribe(res => {
      console.log(res)
      this.mcqs = res;
      this.currentMcq = this.mcqs[this.crrentMcqIndex];
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

    if(Object.keys(SelectedAnswer).length === 0 && SelectedAnswer.constructor === Object){
      alert("Please select Any option");
      return;
    }

    if (SelectedAnswer == this.currentMcq.ans) {
      this.toast.simpleToast("Correct");
      this.correctAnswerCount++;
    }
    else {
      this.toast.simpleToast("Wrong Answer");
    }

    this.crrentMcqIndex++;

    if (this.crrentMcqIndex == this.mcqs.length) {
      this.toast.simpleToast(`Your Result Score ${this.correctAnswerCount} out of ${this.mcqs.length}`);
      this.presentModal();
      return;
    }
    this.currentMcq = this.mcqs[this.crrentMcqIndex];
    this.Answer.name1 = false
    this.Answer.name2 = false
    this.Answer.name3 = false
    this.Answer.name4 = false
  }
  async presentModal() {
    let datatoPass=this.getdataToPass();
    const modal = await this.modalController.create({
      component: McqResultModalPage,
      componentProps:datatoPass
    });
    modal.onDidDismiss()
      .then((data) => {
        this.router.navigateByUrl('/main');
      });
    return await modal.present();
  }
  getdataToPass(){
    return {
      totalMcqs:this.mcqs.length,
      correctAnswers: this.correctAnswerCount,
      wrongAnswers:parseInt(this.mcqs.length) - this.correctAnswerCount,
      student: this.currentUser?.username || "Temporaray User",
      chapter: this.mcqs[0].chapter.name || "",
      percentage: ((parseFloat(this.correctAnswerCount)/parseFloat(this.mcqs.length))*100),

    }

  }


}



