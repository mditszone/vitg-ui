import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChatUser } from '../model/chat-user';
declare var SockJS: any;
declare var Stomp: any;


@Injectable({
    providedIn: 'root'
})



export class ActiveUserChatService {
    data: ChatUser[] = [];
    messages: BehaviorSubject<ChatUser[]>;
    userId: string;
    activeChatUserId: BehaviorSubject<string>;
    selectedUser: BehaviorSubject<ChatUser>;
    isAccpted: boolean = false;
    showAcceptHideBox: BehaviorSubject<boolean>;
    socket = new SockJS('http://localhost:8082/ws');
    stompClient = Stomp.over(this.socket);

    constructor() {
        this.selectedUser = new BehaviorSubject(this.data.length > 0 ? this.data[0] : new ChatUser());
        this.messages = new BehaviorSubject(this.data);
        this.activeChatUserId = new BehaviorSubject(this.userId);
        this.showAcceptHideBox = new BehaviorSubject(false);
    }


    

    setSelecteduser(chatUser: ChatUser) {
        this.selectedUser.next(chatUser);
    }

    setUserId(userId: string) {
        this.userId = userId;
    }

    addChatUser(chatUser: ChatUser) {
        this.messages.value.push(chatUser);
        console.log("addChatUser");
    }

    removedChatUser(user: ChatUser) {
        this.data = this.data.filter(item => item.userId !== user.userId);
        this.messages.next(this.data);
    }

    addMessage(userId: string, message: string) {
        let chatUser: ChatUser = this.data.find(item => item.userId == userId);
        chatUser.messages.push(message);
        this.messages.next(this.data);
    }
     
    setShowAcceptHideBox(val: boolean) {
        this.showAcceptHideBox.next(val);
    }
}

