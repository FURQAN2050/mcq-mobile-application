import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.page.html',
  styleUrls: ['./chapter.page.scss'],
})
export class ChapterPage implements OnInit {
  selectedClassId
  selectedSubjectId

  constructor(private activatedRoute: ActivatedRoute,public router:Router) { }

  ngOnInit() {
    this.selectedClassId = this.activatedRoute.snapshot.paramMap.get('classid');
    console.log(this.selectedClassId)
    this.selectedSubjectId = this.activatedRoute.snapshot.paramMap.get('subjectid');
    console.log(this.selectedSubjectId)
  }
  question(){
    this.router.navigateByUrl('/questions');

  }

  chapters=[
    { name: "Chapter 1", chapterName: "Physical World" },
    { name: "Chapter 2", chapterName: "Units and Measurement" },
    { name: "Chapter 3", chapterName: "Motion in a Straight Line" },
    { name: "Chapter 4", chapterName: "Motion in a Plane" },
    { name: "Chapter 5", chapterName: "Law of Motion" },
    { name: "Chapter 6", chapterName: "Work, Energy, and Power" },
    { name: "Chapter 7", chapterName: "Systems of Power and Rotational Motion" },
    { name: "Chapter 8", chapterName: "Gravitation" },

  ]

}
