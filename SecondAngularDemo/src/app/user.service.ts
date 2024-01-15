import { Injectable } from '@angular/core';
import { Users } from './usersDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  addUser(user:Users)
  {
    this.users.push({username:user.username,email:user.email,password:user.password});
  }
  users:Users[]=[];
  constructor() { }
  public addUsers(user:Users)
  {
    this.users.push({
      username:user.username,email:user.email,password:user.password
    });
  }
  public validateUser(user:Users):boolean{
    let result:boolean=false;
    for(let i=0; i<this.users.length; i++)
    {
      if(this.users[i].email==user.email && this.users[i].password==user.password){
      result=true;
      break;
    }
}
return result;
}
}