import { Injectable } from '@angular/core';
import { Department } from './departmentDTO';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departmentList:Department[]=[];
  constructor() { }

  public getAllDepartment():Department[]{
  return this.departmentList;
  }
  public getDepartmentById(){

  }
  public addDepartment(department:Department){
   this.departmentList.push({id:department.id,name:department.name,noOfEmployee:department.noOfEmployee})
  }
  public updateDepartment(dept:Department){
    for(let i=0;i<this.departmentList.length;i++){
      if(this.departmentList[i].id===dept.id){
        this.departmentList[i].name=dept.name;
        this.departmentList[i].noOfEmployee=dept.noOfEmployee;
        break;
      }
    }
  }
  public deleteDepartment(id:number|undefined){
    let i=0;
    for( i=0;i<this.departmentList.length;i++){
      if(this.departmentList[i].id===id){
      
        break;
      }
    }
   this.departmentList.splice(i,1);
  }
}
