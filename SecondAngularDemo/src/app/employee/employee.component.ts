import { Component, inject } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employeeDTO';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
EmployeeService:EmployeeService=inject(EmployeeService);
employeeList:Employee[]=[];
ngOnInit():void{
this.getEmployees();
this.isUpdatebtn=false;

}
getEmployees(){
  this.employeeList=this.EmployeeService.getAllEmployee();
}
employee:Employee={};
saveEmployee(){
  if(!this.isUpdatebtn){
  this.EmployeeService.addEmployee(this.employee)
 
  }
  else{
    this.EmployeeService.updateEmployee(this.employee);
  }
  this.getEmployees();
  this.employee={};
  this.isUpdatebtn=false;
  
}
isUpdatebtn:boolean=false;
editEmployee(emp:Employee){
  this.isUpdatebtn=true;
  this.employee=emp;
}

deleteEmployee(empid:number| undefined){
  let response=confirm('Do you want to delete id '+empid +' ?');
  if(response==true)
  {
   this.EmployeeService.deleteEmployee(empid);
   this.getEmployees();
  }
}
}
