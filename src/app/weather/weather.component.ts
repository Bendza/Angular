import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../types';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  search:string = '';
  weather:Weather;
  constructor(private weatherService:WeatherService) { }

  getWeather(){
    this.weatherService.getWeather(this.search).subscribe(x => {
      this.weather = x;
      console.log(this.weather.name);
    })
  }

  ngOnInit(): void {
  }

}
