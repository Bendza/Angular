import { Component, OnInit } from '@angular/core';
import { LoginDto, User } from '../types';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerData = { email: '', password: '',name:'' } as LoginDto;
  greska: string = '';
  constructor(private userservice:UserService,private routerService:Router) { }

  onRegister(){
    if (this.registerData.email != '' && this.registerData.name != '' && this.registerData.password != '')
    {
      this.userservice.register(this.registerData);
      this.registerData = {email:'',password:'',name:''}
      this.gotoLogin()
    }
    else
    {
      this.greska = 'Error'
    }
  }

  gotoLogin(){
    this.routerService.navigate(['login']);
  }

  ngOnInit(): void {
  }

}
