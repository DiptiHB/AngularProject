import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
email:string="";
user:string="";
password:string="";
confirm:string="";

showuser()
{
  console.log(this.email+" "+this.user+" "+this.password);
}
}
