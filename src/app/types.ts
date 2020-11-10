import { NumberFormatStyle } from '@angular/common';

export interface User{
    id:number;
    name:string;
    password:string;
    email:string;
    role?:Role; 
    gender:Gender;
    birth:string;
} 

export enum Role{
  Admin = 'Administrator',
  User = 'Korisnik'
}

export enum Gender{
  Male = 'Muski',
  Female = 'Zenski'
}

export interface LoginDto{
    email:string;
    password:string;
    name:string;
    role?:Role;
    gender:Gender;
    birth:string;
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
        role: Role.Admin,
        gender:Gender.Male,
        birth:'08.01.1998'
    },
]

export class ChatWindow{
  poruke?:Poruka[];
  ime:string;
}

export class Poruka{
  korisnik:User;
  sadrzaj:string;

  constructor(korisnik,sadrzaj){
    this.korisnik = korisnik;
    this.sadrzaj = sadrzaj;
  }
}

export const Chatovi:ChatWindow[] =[
  {
    ime:'Chat1',
    poruke:[]
  },
  {
    ime:'Chat2',
    poruke:[]
  }
]