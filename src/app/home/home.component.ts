import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { Movie } from '../types'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private routerService:Router){}

  weatherRouter(){
    this.routerService.navigate(['/home/weather']);
  }
  movieRouter(){
    this.routerService.navigate(['/home/movies'])
  }

  ngOnInit(){

  }

}
