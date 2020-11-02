import { NumberFormatStyle } from '@angular/common';

export interface User{
    id:number;
    name:string;
    password:string;
    email:string;
}

export interface LoginDto{
    email:string;
    password:string;
    name:string;
}

export interface Movie{
    Title:string;
    year:string;
    Poster:string;
    imdbID:string;
    type:string;
}

export interface Weather{
    
    coord: {
      lon: number,
      lat: number
    },
    "weather": [
      {
        id:number,
        main: string,
        description: string,
        icon: string
      }
    ],
    base: string,
    main: {
      temp: number,
      feels_like: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      humidity: number
    },
    visibility: number,
    wind: {
      speed: number,
      deg: number
    },
    clouds: {
      all: number
    },
    sys: {
      type: number,
      id: number,
      message: number,
      country: string,
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
  
}

export const USERS:User[] = [
    {
        id:1,
        name:"Belmin",
        password:"123",
        email:'bendza@mail.com',
    },
    {
        id:2,
        name:"Jakub",
        password:"123",
        email:'jaksa@mail.com',
    }

]