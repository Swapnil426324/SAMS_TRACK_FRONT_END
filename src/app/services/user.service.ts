import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor(private http : HttpClient) { }

  loginUser(userCredentials:any):Observable<any>{
     const apiUrl = 'http://localhost:8091/user/login-user';
     return this.http.post(apiUrl,userCredentials);   
  }

  addUser(user:any):Observable<any>{
    const apiUrl = 'http://localhost:8091/user/register-user';
    return this.http.post(apiUrl,user,{responseType:'text' as 'json'});   
  }

  getAllUsers():Observable<any>{
    const apiUrl = 'http://localhost:8091/user/get-all-user';
    return this.http.get(apiUrl);   
  }

  deleteUser(username:string):Observable<any>{
    const apiUrl = `http://localhost:8091/user/delete-user-by-username?username=${username}`;
    return this.http.delete(apiUrl,{responseType:'text' as 'json'});
  }

  private userSource = new BehaviorSubject<User | null>(null)
  user$ = this.userSource.asObservable();

  setUser(user:User){
    this.userSource.next(user);
  }
  clearUser(){
    this.userSource.next(null);
  }

  updateUser(user:any){
    const apiUrl = 'http://localhost:8091/user/update-user';
    return this.http.put(apiUrl,user,{responseType:'text' as 'json'});   
  
  }

  getAllFaculty(): Observable<any> {
    const apiUrl = "http://localhost:8091/user/get-all-faculty";
    return this.http.get(apiUrl);
  }

}
