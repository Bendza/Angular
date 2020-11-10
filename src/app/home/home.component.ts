import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { Movie, Role } from '../types'
import { Router } from '@angular/router'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private routerService:Router,private userService:UserService){}

  weatherRouter(){
    this.routerService.navigate(['/home/weather']);
  }
  movieRouter(){
    this.routerService.navigate(['/home/movies']);
  }

  logOut(){
    this.routerService.navigate(['login']);
    this.userService.LoggedinUser = undefined;
  }

  isAdmin(){
    if (this.userService.LoggedinUser.role === Role.Admin)
      return true;
    else
      return false;
  }

  ngOnInit(){

  }

}
