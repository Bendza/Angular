import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from '../types';

@Component({
  selector: 'app-moviespage',
  templateUrl: './moviespage.component.html',
  styleUrls: ['./moviespage.component.scss']
})
export class MoviespageComponent implements OnInit {
  search:string = '';
  movies: Movie[];
  constructor(private movieService:MovieService){}

  getMovies():void {
    this.movieService.searchMovie(this.search).subscribe(x => {
      this.movies = x.Search;
      console.log(this.movies);
    })
  }
  ngOnInit(): void {
  }

}
