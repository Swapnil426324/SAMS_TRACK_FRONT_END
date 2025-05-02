import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent {

  subject: any;

  constructor(private subjectService: SubjectService, activatedRoute: ActivatedRoute,private router:Router) {
    let id = activatedRoute.snapshot.paramMap.get('subjectid');
    this.getSubject(id)
  }


  getSubject(id: any) {
    this.subjectService.getSubject(id).subscribe((res) => {
      this.subject=res;
    })
  }

  updateSubject() {
    this.subjectService.updateSubject(this.subject).subscribe({next:(data) => {
      this.router.navigate(["/all-subject"]);
    },
    error:(err) => {
      console.log(err);
    }
  })
  }

}
