import { Component, Input, OnInit } from '@angular/core';
import { PorukaComponent } from '../poruka/poruka.component';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';
import { ChatWindow,Poruka,User } from '../types'

@Component({
  selector: 'app-chatwindow',
  templateUrl: './chatwindow.component.html',
  styleUrls: ['./chatwindow.component.scss']
})
export class ChatwindowComponent implements OnInit {
  @Input() chat: ChatWindow;
  @Input() poruka: Poruka = {korisnik:this.userService.LoggedinUser,sadrzaj:''};
  constructor(private chatService:ChatService,private userService:UserService) { }

  ngOnInit(): void {
  }

  posaljiPoruku(){
    if (this.poruka.sadrzaj !== '')
      {
        this.chat.poruke.push(new Poruka(this.poruka.korisnik,this.poruka.sadrzaj));
        this.poruka.sadrzaj = '';
      }
  }
}
export class InputHintExample {}
