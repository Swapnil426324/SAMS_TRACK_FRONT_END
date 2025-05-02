import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  addSubject(subject: any): Observable<any> {
    const apiUrl = "http://localhost:8091/subject/add-subject";
    return this.http.post(apiUrl, subject)

  }

  allSubjects(): Observable<any> {
    const apiUrl = "http://localhost:8091/subject/get-all-subjects";
    return this.http.get(apiUrl);
  }

  getSubject(id: any): Observable<any> {
    const apiUrl = `http://localhost:8091/subject/get-subject-by-id/${id}`;
    return this.http.get(apiUrl);
  }

   //update course
   updateSubject(subject:any) {
    const apiUrl = `http://localhost:8091/subject/update-subject`;
    return this.http.put(apiUrl, subject);
  }

}
