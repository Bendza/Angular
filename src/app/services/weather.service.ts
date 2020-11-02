import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiRoute= 'http://api.openweathermap.org';
  apiKey = '478e70470c5b2c9c4c0a23320f5b7c87';
  constructor(private httpClient:HttpClient) { }

  getWeather(title:string){
    return this.httpClient.get<any>(`${this.apiRoute}/data/2.5/weather?q=${title}&appid=${this.apiKey}`);
  }
}
