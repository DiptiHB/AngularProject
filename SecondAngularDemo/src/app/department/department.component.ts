import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from './department.service';
import { Department } from './departmentDTO';


@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
DepartmentService:DepartmentService=inject(DepartmentService)
departmentList:Department[]=[];
ngOnInit():void{
this.getDepartments();
this.isUpdatebtn=false;
}
getDepartments(){
 this.departmentList=this.DepartmentService.getAllDepartment();
}
department:Department={};
saveDepartment(){
  if(!this.isUpdatebtn){
    this.DepartmentService.addDepartment(this.department)
   
    }
    else{
      this.DepartmentService.updateDepartment(this.department);
    }
    this.getDepartments();
    this.department={};
    this.isUpdatebtn=false;
}

isUpdatebtn:boolean=false;
editDepartment(dept:Department){
  this.isUpdatebtn=true;
  this.department=dept;
}
deleteDepartment(deptid:number| undefined){
  let response=confirm('Do you want to delete id '+deptid +' ?');
  if(response==true)
  {
   this.DepartmentService.deleteDepartment(deptid);
   this.getDepartments();
  }
}
}