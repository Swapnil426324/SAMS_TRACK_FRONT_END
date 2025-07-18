import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-all-subject',
  templateUrl: './all-subject.component.html',
  styleUrls: ['./all-subject.component.css']
})
export class AllSubjectComponent {

  constructor(private subjectService: SubjectService) { }

  subjectList: any[] = [];

  ngOnInit(): void {
    this.allSubjects();
  }

  allSubjects() {
    this.subjectService.allSubjects().subscribe((res) => {
      this.subjectList = res;
    })
  }

  deleteSubject(id : any){
     this.subjectService.deleteSubject(id).subscribe((res)=>{
      
      this.allSubjects();
      alert(res);
     })
  }
}
