import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChatBotData } from 'src/app/shared/model/chatbot-data';
import { v4 as uuidv4 } from 'uuid';


declare var SockJS: any;
declare var Stomp: any;


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})


export class ChatComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  @Input() userName: string = "Guest";
  @Input() links: ChatBotData[];
  @Input() botMessage: string = "Hey there, this is VIT Global chatbot, need assistance?";
  @Input() agentMessage: string = "please wait, connecting with our agent...";

  showBotMessage: boolean = true;
  showBot: boolean = true;
  showAgentMessage: boolean = false;
  minimized: boolean = false;
  showNameBox: boolean = false;
  message: string = "";
  sender: string = "";
  stompClient: any;
  messageElement: any;
  uuid: any;
  constructor(private elementRef: ElementRef) {

    var chatMessage = {
      sender: "venkat",
      content: "test",
      type: 'CHAT'
    }

    var socket = new SockJS('http://localhost:8082/ws');
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect(chatMessage, () => {
      console.log("connected");
      this.stompClient.subscribe('/user/public', (sdkEvent) => {
        console.log(sdkEvent)
      });
    });

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.messageElement = this.elementRef.nativeElement.querySelector('.messages');
  }


  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollToBottom = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }


  send() {
    console.log(this.message);
    this.messageElement.insertAdjacentHTML('beforeend',
      `<div class="user-message">
        <span>${this.message}</span>
        <img height="20" width="20" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />
      </div>`
    );
    this.sendMessage(this.message);
  }

  userJoin() {
    this.uuid = uuidv4();
    const messageObj = {
      userId: this.uuid,
      userName: this.sender,
      type: 'JOIN'
    };

    this.stompClient.send("/app/addUserToRoom", {}, JSON.stringify({
      userId: this.uuid,
      userName: this.sender,
      type: 'JOIN',
      content: 'hello'
    }));

    this.stompClient.subscribe("/user/"+ messageObj.userId + "/queue/messages", (sdkEvent) => {
      console.log(sdkEvent);
      let json = JSON.parse(sdkEvent.body);
      if (json.messageStatus == 'DELIVERED') {
        this.messageElement.insertAdjacentHTML('beforeend',
          `<div class="team-message">
            <img height="20" width="20" src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" />
            <span>${json.content}</span>
          </div>`
        );
      }
      
    });

    this.sender = '';
    this.showNameBox = false;

  }

  
  sendMessage(sender: string) {
    if (this.stompClient) {
      const chatMessage = {
        userId: this.uuid,
        userName: this.sender,
        content: this.message,
        type: 'CHAT',
        messageStatus: 'RECEIVED'
      };
      this.stompClient.send("/app/chat", {}, JSON.stringify(chatMessage));
      this.message = '';
    }
    event.preventDefault();
  }


  onMessageReceived(payload) {
    console.log("test");
    var message = JSON.parse(payload.body);
    console.log("received", message);
  }


  minimize() {
    console.log('clicked');
    this.minimized = this.minimized ? false : true;
  }

  showMessage(link: ChatBotData) {
    this.showBot = false;
    for (let item of this.links) {
      if (link.title === item.title) {
        link.show = true;
        break;
      } else {
        link.show = false;
      }
    }
  }

  goBack() {
    this.showBot = true;
    for (let item of this.links) {
      item.show = false;
    }
  }

  connect() {
    this.showBot = false;
    this.showAgentMessage = true;
    this.showNameBox = true;
    for (let item of this.links) {
      item.show = false;
    }
  }

  goBackToHome() {
    this.showBot = true;
    this.showAgentMessage = false;
    for (let item of this.links) {
      item.show = false;
    }
  }

  enterName() {
    this.showNameBox = false;
    this.sendMessage(this.sender)
  }

}


