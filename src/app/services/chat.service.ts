import { Injectable } from '@angular/core';
import { Chatovi,ChatWindow,Poruka } from '../types'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  ChatDB:ChatWindow[] = Chatovi;
  constructor() { }

  sacuvajPoruku(por:Poruka,kojichat:ChatWindow){
    if (localStorage.getItem('chat'))
      localStorage.clear();
    kojichat.poruke.push(new Poruka(por.korisnik,por.sadrzaj));
    localStorage.setItem('chat',JSON.stringify(this.ChatDB));
  }

  ucitajPoruke():void{
    if (localStorage.getItem('chat'))
      this.ChatDB = (JSON.parse(localStorage.getItem('chat')) as ChatWindow[]);
  }
  

}
