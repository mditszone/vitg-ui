import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export class Message {
  constructor(public author: string, public content: string) {}
}
@Injectable()
export class ChatService {
  constructor() {}
  conversation = new Subject<Message[]>();
  messageMap:any = {
    "Hi": "Welcome to Runwheelz Chat",
    "hi": "Welcome to Runwheelz Chat",
    "Hello":"How can I help you",
    "Who are you": "My name is Test Chat Bot",
    "What is your role": "Just guide for the user",
    "Java": "Java Topics:Exception Handling,Threads,OOPS",
    "defaultmsg": "I can't understand your text. Can you please repeat"
  }
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }
  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['defaultmsg'];
  }
}