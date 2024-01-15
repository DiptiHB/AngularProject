import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  @Input() msg:string='';
  @Output() passValue=new EventEmitter<string>();
employeeList:IEmployee[]=[
  {empid:11,empName:"Dipti",city:"Pune"},
  {empid:12,empName:"Rudrapriya",city:"Mumbai"},
  {empid:13,empName:"Abhishek",city:"Nashik"}

];
sendMessage(){
  this.passValue.emit("Hello,from Child._.");
}
}
export interface IEmployee{
  empid:number;
  empName:string,
  city:string;
}