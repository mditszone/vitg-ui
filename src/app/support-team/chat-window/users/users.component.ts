import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { appBarClasses } from '@mui/material';
import { PushNotificationsService } from 'ng-push';
import { ChatUser } from 'src/app/shared/model/chat-user';
import { ActiveUserChatService } from 'src/app/shared/services/active.user.chat.service';

declare var SockJS: any;
declare var Stomp: any;


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  messageElement: any;
  activeUserId: string;
  usersList: ChatUser[] = [];
  selectedList: boolean[] = [];
  userId: string;
  selected: false;

  constructor(private _pushNotifications: PushNotificationsService, private elementRef: ElementRef, private activeUserChatService: ActiveUserChatService) {
    
    var chatMessage = {
      sender: "venkat",
      content: "test",
      type: 'CHAT'
    }



    // var socket = new SockJS('http://localhost:8082/ws');
    // this.stompClient = Stomp.over(socket);

    this.activeUserChatService.stompClient.connect(chatMessage, () => {

      console.log("connected");

      this.activeUserChatService.stompClient.subscribe('/user/public', (payload) => {

        console.log(payload);
        const message = JSON.parse(payload.body);

        this.notify();

        let chatUser: ChatUser = new ChatUser();

        chatUser.userId = message.userId;
        chatUser.userName = message.userName;

        this.selectedList.push(false);
        this.activeUserChatService.addChatUser(chatUser);
        this.activeUserChatService.setUserId(message.userId);

        this.activeUserChatService.stompClient.subscribe("/user/" + message.userId + "/queue/messages", (load) => {
          const test = JSON.parse(load.body);
          if (test.messageStatus == 'RECEIVED') {
            const html =  `<div class="user-message">
            <img height="20" width="20" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />
              <span>${test.content}</span>
            </div>`;
            this.activeUserChatService.addMessage(message.userId, html);
          }

        });

      });

    });

  }

  ngOnInit(): void {
    this.activeUserChatService.messages.subscribe(data => this.usersList = data);
  }


  ngAfterViewInit() {
    this.messageElement = this.elementRef.nativeElement.querySelector('.messages');
    console.log(this.messageElement);
  }


  onSelected(index: number, user: ChatUser) {
    this.activeUserChatService.setUserId(user.userId);
    this.activeUserChatService.setSelecteduser(user);
    for (let i = 0; i < this.selectedList.length; i++) {
      if (index === i) this.selectedList[i] = true;
      else this.selectedList[i] = false;
   }
  }


  notify() {
    let options = { //set options
      body: "New User Joined In, please check",
      icon: "assets/images/ironman.png",
      sticky: true, //adding an icon
      sound: 'src\\assets\\mixkit-bell-notification-933.wav'
    }
    this._pushNotifications.create("Message", options).subscribe( //creates a notification
      res => console.log(res),
      err => console.log(err)
    );
  }

  onChange() {
    
  }


}
