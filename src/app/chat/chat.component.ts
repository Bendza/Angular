import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { ChatWindow } from '../types';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {
  @Input() listaChatova:ChatWindow[];
  aktivniChat:ChatWindow;
  constructor(private chatService:ChatService) { }
  
  ngOnInit(): void {
    this.listaChatova = this.chatService.ChatDB;
  }
  
  promenaChata(chat:ChatWindow) {
    this.aktivniChat = chat;
  }

}
