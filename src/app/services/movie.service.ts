import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../types'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiRoute= 'http://www.omdbapi.com/';
  apiKey = '43337568'
  constructor(private httpClient: HttpClient) { }

  searchMovie(title:string): Observable<any>{
    return this.httpClient.get<any>(`${this.apiRoute}?s=${title}&apikey=${this.apiKey}`);
  }
}
