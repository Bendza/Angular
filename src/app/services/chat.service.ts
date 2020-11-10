import { Injectable } from '@angular/core';
import { Chatovi,ChatWindow,Poruka } from '../types'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  ChatDB:ChatWindow[] = Chatovi;
  constructor() { }
}
