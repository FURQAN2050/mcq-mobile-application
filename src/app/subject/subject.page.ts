import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {
  selectedClassId;
  selectedSubjectId;

  constructor(private activatedRoute: ActivatedRoute,public router:Router) { }

  ngOnInit() {
    
  }

  subject(){
    this.router.navigateByUrl('/chapter/'+this.selectedClassId)
    this.selectedClassId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.selectedClassId)
  }
  subjects = [
    { name: "Physics", id: "1" },
    { name: "Chemistery", id: "2" },
    { name: "English", id: "3" }
  ]

}
