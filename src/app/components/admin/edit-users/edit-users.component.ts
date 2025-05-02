import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit{
  user: any;
  
  constructor(private userservice:UserService, private router:Router){}

  ngOnInit(): void {
    this.userservice.user$.subscribe(user =>{
      this.user=user;
    })
    console.log(this.user)
  }

  updateUser(){
    this.userservice.updateUser(this.user).subscribe(res=>{
      this.router.navigate(['/all-users']);
    })
  }
  
  
}
