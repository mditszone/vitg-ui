import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatUser } from 'src/app/shared/model/chat-user';
import { ActiveUserChatService } from 'src/app/shared/services/active.user.chat.service';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.scss']
})
export class ChatUserComponent implements OnInit {

  @Input() user: ChatUser;
  @Output() selectedUser: EventEmitter<ChatUser> = new EventEmitter<ChatUser>();
  @Input() selected: boolean = false;
  
  isHovered: boolean = false;
  
  constructor(private activeUserChatService: ActiveUserChatService) { }

  ngOnInit(): void {}

  onClick() {
    this.selectedUser.emit(this.user);
    this.activeUserChatService.setShowAcceptHideBox(true);
  }
  
}