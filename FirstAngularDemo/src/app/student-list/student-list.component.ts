import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  @Input() data:string='';
  @Output() exchangeValue=new EventEmitter<string>();
  studentList:IStudent[]=[
    {studid:1,name:"Dipti",marks:82},
    {studid:2,name:"Himali",marks:75},
    {studid:3,name:"Sakshima",marks:92},
    {studid:4,name:"Ram",marks:72}
  ];
passMessage(){
  this.exchangeValue.emit("Hello,from Student");
}
}
export interface IStudent{
  studid:number;
  name:string;
  marks:number;

}