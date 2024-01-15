import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from '../usersDTO';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userService:UserService=inject(UserService);
  user:Users={};
  constructor(private router:Router){}
 
  addUser(){
    if (this.user.password == this.user.confirmPassword) {

    this.userService.addUser(this.user);
    alert('Register Successfull..');
    this.router.navigate(['/login']);
  }
  else{
    alert('Password Does Not Match');
  }

  }
}
