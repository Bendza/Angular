import { Component, OnInit } from '@angular/core';
import { LoginDto, Role, User } from '../types';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { empty } from 'rxjs';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerData = { email: '', password: '',name:'',role:undefined,gender:undefined,birth:''} as LoginDto;
  emptyData = { email: '', password: '',name:'',role:undefined,gender:undefined,birth:''} as LoginDto;
  greska: string = ''; 
  picker:Date;
  role = new FormControl();
  mode: ProgressSpinnerMode = 'determinate';
  booleani: number[] = []
  value = 0;

  roles:Role[] = [Role.User,Role.Admin];

  constructor(private userservice:UserService,private routerService:Router) { }

  onRegister(){
    if (this.registerData.email != '' && this.registerData.name != '' && this.registerData.password != '' && this.registerData.gender != undefined && this.registerData.birth != undefined)
    {
      console.log(this.role.value);
      this.userservice.register(this.registerData);
      this.registerData = this.emptyData;
      this.role.setValue('');
      this.value=0;
      if (this.userservice.LoggedinUser === undefined)
      {
      this.gotoLogin()
      }

    }
    else
    {
      this.greska = 'Error'
    }
  }

  isRegister(){
    if (this.userservice.LoggedinUser === undefined)
      return false
    else
      return true
  }

  gotoLogin(){
    this.routerService.navigate(['login']);
  }

  ngOnInit(): void {
  }

  onChange(broj: number,event:any){
    if (event.target.value !== undefined || event.target.value != '')
    {
        if (this.booleani.includes(broj))
        {   
        }
        else{
          this.booleani.push(broj);
          if (this.isRegister()){
            this.value+=16.666;
          }
          else
          {
            this.value+=20;
          }
        }
    }
  }

}

