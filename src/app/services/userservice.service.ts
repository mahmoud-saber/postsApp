import { Injectable } from '@angular/core';
import { Users } from '../interfases/userinterface';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  allUsers:Users[]=[
    {name:'ali',age:34},
    {name:'omar',age:24},
    {name:'osama',age:44}

  ]
  getUsers(){
    return this.allUsers
  }

  constructor() { }
}
