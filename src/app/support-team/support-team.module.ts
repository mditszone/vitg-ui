import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { ChatWindowModule } from './chat-window/chat-window.module';
import { SupportTeamRoutingModule } from './support-team-routing.module';
import { ActiveUserChatService } from '../shared/services/active.user.chat.service';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    NotificationsComponent,
    FeedBackComponent,
  ],
  imports: [
    CommonModule,
    ChatWindowModule,
    SupportTeamRoutingModule ,
    MatMenuModule
  ],
  providers: [
    ActiveUserChatService
  ]
})
export class SupportTeamModule { }
