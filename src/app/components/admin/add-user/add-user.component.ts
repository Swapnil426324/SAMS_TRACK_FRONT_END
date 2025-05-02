import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private userservice:UserService, private router:Router) { }

  user = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(3)]),
    password : new FormControl('',[Validators.required,Validators.minLength(3)]),
    firstName : new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName : new FormControl('',[Validators.required,Validators.minLength(3)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    role : new FormControl('',[Validators.required])
  })

  addUser(){
   this.userservice.addUser(this.user.value).subscribe(res =>{
    alert(res)
    this.router.navigateByUrl('admin-dashboard')
   })
  }
}
