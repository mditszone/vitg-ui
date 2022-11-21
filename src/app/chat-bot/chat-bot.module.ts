import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatBotRoutingModule } from './chat-bot-routing.module';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ChatBotRoutingModule,
    FormsModule
  ],
   providers: [ChatService]
})
export class ChatBotModule { }
