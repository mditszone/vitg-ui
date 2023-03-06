import { Component, OnInit } from '@angular/core';
import { ChatUser } from 'src/app/shared/model/chat-user';
import { ActiveUserChatService } from 'src/app/shared/services/active.user.chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  user: ChatUser;
  activeUserChatService: ActiveUserChatService;
  
  constructor() {
    this.activeUserChatService = new ActiveUserChatService();
    console.log(this.activeUserChatService);
  }

  ngOnInit(): void {
  }

  onSelectedUser(val: ChatUser) {
    this.user = val;
  }
  
}
