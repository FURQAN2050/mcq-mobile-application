import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClassApi, SubjactApi } from 'src/app/shared/sdk';

@Injectable({
  providedIn: 'root'
})
export class ApiSupportingServicesService {

  classes=new BehaviorSubject([]);
  subjects=new BehaviorSubject([]);
  constructor(private classApi:ClassApi,private subjectApi:SubjactApi) { }

  setClasses(){
    this.classApi.find().subscribe(res=>{
      this.classes.next(res);
    })
  }
  
  getClasses(){
    return this.classes.asObservable()
  }

  // setSubjects(filter={}){
  //   this.classApi.find({
  //     where:filter
  //   }).subscribe(res => {
  //     this.subjects.next(res);
  //   })
  // }

  // setSubjects(){
  //   this.subjectApi.find().subscribe(res=>{
  //     this.subjects.next(res)
  //   })
  // }
  // getSubjects(){
  //   return this.subjects.asObservable();
  // }
}
