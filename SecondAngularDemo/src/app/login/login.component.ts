import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, RouterOutlet } from '@angular/router';
import { Users } from '../usersDTO';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:any='';
  userService:UserService=inject(UserService);

  constructor(private router:Router){}
  user:Users={};
  
  validateUser(){
    this.email=this.user.email;
    let result=this.userService.validateUser(this.user)
    if(result==true)
    {
      localStorage.setItem('usermail',this.email);
      this.router.navigate(['/employee']);
    }
    else{
      alert('Login failed..');
    }
  }

}
