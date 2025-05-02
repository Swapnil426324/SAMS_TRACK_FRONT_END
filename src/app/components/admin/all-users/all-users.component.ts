import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit{

  users:User[]=[];
  constructor(private userservice:UserService, private router:Router){}

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userservice.getAllUsers().subscribe(res=>{
      this.users=res;
    })
  }

  editUser(user:User){
    this.userservice.setUser(user);
    this.router.navigate(['/edit-user'])
  }

  deleteUser(username:string){
    this.userservice.deleteUser(username).subscribe(res=>{
      this.getAllUsers();
      alert(res)
    })
  }
}
