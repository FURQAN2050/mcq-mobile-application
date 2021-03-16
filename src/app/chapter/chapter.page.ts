import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterApi } from '../shared/sdk';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.page.html',
  styleUrls: ['./chapter.page.scss'],
})
export class ChapterPage implements OnInit {
  selectedClassId
  selectedSubjectId
  chapters=[]


  constructor(private activatedRoute: ActivatedRoute,public router:Router,private chapterApi:ChapterApi) { }

  ngOnInit() {
    this.selectedSubjectId = this.activatedRoute.snapshot.paramMap.get('subjectid');
    console.log(this.selectedSubjectId)
    this.getChapters();
  }
  question(){
    this.router.navigateByUrl('/questions');
  }

  getChapters(){
    let filter = {
      where: { subjactId:this.selectedSubjectId }
    }
    this.chapterApi.find(filter).subscribe(res=>{
      this.chapters=res
      console.log(this.chapters)
    })

  }


}
