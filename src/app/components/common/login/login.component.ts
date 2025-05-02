import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userservice : UserService, private router:Router){}

  userCredentials={
    username:'',
    password:''
  }


  loginUser(){
      this.userservice.loginUser(this.userCredentials).subscribe(res=>{
        console.log(res);

        if(res === null){
          alert('Invalid username and password');
        }else{

          if(res.role==='admin'){
            this.router.navigateByUrl('/admin-dashboard');
          }else{
            this.router.navigateByUrl('/faculty-dashboard');
          }

        }
      


      })
  }
}
