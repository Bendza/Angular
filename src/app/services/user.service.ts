import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Gender, LoginDto, Role, User, USERS } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersDB = USERS;
  LoggedinUser : User;
  constructor() { }

  login(loginData: LoginDto): Observable<User>{
    let user = this.usersDB.find(x => x.email == loginData.email && x.password == loginData.password)
    this.LoggedinUser = user;
    if (user){
      if (localStorage.getItem('user')){
        localStorage.clear();
      }
      localStorage.setItem('user',JSON.stringify(user))
    }
    return of(user)
  }

  register(registerData: LoginDto): void{
    let user:User = {
      id : Math.random() * 10,
      name : registerData.name,
      email : registerData.email,
      password : registerData.password,
      role : Role.User,
      gender: registerData.gender,
      birth: registerData.birth
    }
    USERS.push(user);
  }
}
