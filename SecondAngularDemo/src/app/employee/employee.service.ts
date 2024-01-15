import { Injectable } from '@angular/core';
import { Employee } from './employeeDTO';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList:Employee[]=[];
  private id: number = 1; 
  constructor() {
    this.employeeList.push({ id: 101, name: "Dipti", salary: 29000, city: "pune" });
  }

  generateEmployeeId(): number {
    this.id++;
    return this.id;
  }

  public getAllEmployee():Employee[]{
    return this.employeeList;
  }
  public getEmployeeById(id:number){

  }
  public addEmployee(employee:Employee):void{
    employee.id = this.generateEmployeeId();
    this.employeeList.push({id:employee.id,name:employee.name,salary:employee.salary,city:employee.city});
    
  }
  public updateEmployee(emp:Employee):void{
    for(let i=0;i<this.employeeList.length;i++){
      if(this.employeeList[i].id===emp.id){
        this.employeeList[i].name=emp.name;
        this.employeeList[i].salary=emp.salary;
        this.employeeList[i].city=emp.city;
        break;
      }
    }
  }
  public deleteEmployee(id:number|undefined){
    let i=0;
    for( i=0;i<this.employeeList.length;i++){
      if(this.employeeList[i].id===id){
      
        break;
      }
    }
   this.employeeList.splice(i,1);
  }
}
