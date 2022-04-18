import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }
  loggedIn = false;
  login(user: User):boolean{
    if(user.userName=="kubra" && user.password== "123"){
      return true;
      this.loggedIn = true;
      localStorage.setItem("isLogged",user.userName);
    }
    return false;
  }
  isLoggenin(){
    return this.loggedIn;
  }
  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
