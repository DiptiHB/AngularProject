import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HighlightDirective } from './highlight.directive';
import { MyMathPipe } from './my-math.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,EmployeeListComponent,StudentListComponent,EmployeeComponent,RegisterComponent,LoginComponent,HighlightDirective,MyMathPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstAngularDemo';
  message:string="Welcome!!";
  city:string="Pune";
  isdisable:boolean=false;
  info:string="Hello,From Parents :)"
  token:string="Hello from School"
  color:string="red";
  num:number=1;
  text:string="Hello,Welcome to world of Angular:)";
  currentDate=new Date();
  num1:number=255;
  num2:number=2500;
  childMsg:string='';
  readMessage(msg:string)
  {
    this.childMsg=msg;
  }

  childStud:string='';
  getstudmsg(msg1:string)
  {
    this.childStud=msg1;
  }

  displayMsg()
  {
    alert('Welcome to Angular..! :)');
  }
  showMsg()
  {
    let res=confirm('Do you want to pay ? ');
    if(res==true)
    {
      alert('Payment done..! Thank you!');
    }
    else{
      alert('Payment is cancelled.!');
    }
  }
  applycolor()
  {
    let colors={
      'background-color':'pink',
    'color':'violet',
    'font-size':'30px'


    }
  return colors;  
  }
  message1: string = '';
   isSuccess: boolean = false;
    isError: boolean = false;
    isWarning: boolean = false;
    Success() {
        this.isSuccess = true;
        this.isError = false;
        this.isWarning = false;
        this.message = 'Success :)';
    }
 
    Error() {
        this.isError = true;
        this.isSuccess = false;
        this.isWarning = false;
        this.message = 'Danger!!';
    }
 
    Warning() {
        this.isWarning = true;
        this.isError = false;
        this.isSuccess = false;
        this.message = 'Warning ._.!!';
    }

}
