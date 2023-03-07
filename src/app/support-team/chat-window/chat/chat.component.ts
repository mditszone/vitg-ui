import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PushNotificationsService } from 'ng-push';
import { ChatUser } from 'src/app/shared/model/chat-user';
import { Staff } from 'src/app/shared/model/staff';
import { ActiveUserChatService } from 'src/app/shared/services/active.user.chat.service';
import { ChatRoomService } from 'src/app/shared/services/chat.room.service';




@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  user: ChatUser = null;

  messageElement: any;
  message: string = "";
  chatMessages: string[] = [];
  showHideAcceptBox: boolean;


  constructor(private _pushNotifications: PushNotificationsService, private elementRef: ElementRef,
    private activeUserChatService: ActiveUserChatService,
    private chatRoomService: ChatRoomService) {
  }

  ngAfterViewInit() {
    this.messageElement = this.elementRef.nativeElement.querySelector('.messages');
  }


  ngOnInit(): void {
    this.activeUserChatService.selectedUser.subscribe((user) => {
      this.user = user;
    });
    this.activeUserChatService.showAcceptHideBox.subscribe(val => this.showHideAcceptBox = val);
   }

  sendMessage() {
    if (this.user.isAccepted) {
      this.activeUserChatService.stompClient.send("/app/chat", {}, JSON.stringify({
        userId: this.user.userId,
        userName: this.user.userName,
        type: 'CHAT',
        content: this.message,
        sender: true,
        messageStatus: 'DELIVERED'
      }));
      const html =  `<div class="team-message">
                      <span>${this.message}</span>
                      <img height="20" width="20" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />
                    </div>`;
  
      this.activeUserChatService.addMessage(this.user.userId, html);
      this.message = "";
    }
      
  }

  acceptChat() {
    const staffDTO: any = JSON.parse(sessionStorage.getItem("staff_dto") || '{}');
    console.log(staffDTO.vitgStaffDTO.id);
    if (staffDTO) {
      this.user.supportTeamId = staffDTO.vitgStaffDTO.id;
      this.chatRoomService.updateChatRoom(this.user).subscribe(data => {});
      this.user.isAccepted = true;
    }
  }

  deny() {
    console.log(this.activeUserChatService.data);
    this.activeUserChatService.removedChatUser(this.user);
    console.log(this.activeUserChatService.data);
    this.user.isAccepted = true;
  }

}
