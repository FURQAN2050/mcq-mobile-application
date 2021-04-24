import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjactApi } from '../shared/sdk';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage  {
  @Input() selectedClassId;



  constructor(private activatedRoute: ActivatedRoute, public router: Router, private subjectApi: SubjactApi) { }



}
