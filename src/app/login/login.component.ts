import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { UserService } from '../services/user.service';
import { LoginDto } from '../types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData = { email: '', password: '' } as LoginDto;
  greska: string = '';
  constructor(private userService: UserService,private routerService:Router) { }

  onLogin() {
    this.userService.login(this.loginData).subscribe(x => {
      if (x) {
        this.routerService.navigate(['home']);
      }
      else {
        this.greska = 'Error 404'
      }

    });
  }

  routerRegister(){
    this.routerService.navigate(['register']);
  }

  ngOnInit(): void {
  }

}
