import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjactApi } from '../shared/sdk';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {
  selectedClassId;
  selectedSubjectId;
  subjects:any = []


  constructor(private activatedRoute: ActivatedRoute,public router:Router,private subjectApi:SubjactApi) { }

  ngOnInit() {
    this.selectedClassId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getSubjects();
  }

  openChapterPage(){
    console.log(this.selectedSubjectId)
    let id=this.selectedSubjectId.id
    this.router.navigateByUrl('/chapter/'+id)
    console.log(id)
  }

  getSubjects(){
    let filter = {
      where: { classId:this.selectedClassId }
    }
    this.subjectApi.find(filter).subscribe(res=>{
      this.subjects=res
      console.log(this.subjects)

    })
  }

}
