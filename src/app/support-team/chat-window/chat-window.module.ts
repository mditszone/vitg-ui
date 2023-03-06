import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatWindowRoutingModule } from './chat-window-routing.module';
import { UsersComponent } from './users/users.component';
import { InfoComponent } from './info/info.component';
import { ChatComponent } from './chat/chat.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    UsersComponent,
    InfoComponent,
    ChatComponent,
    ChatWindowComponent,
    ChatUserComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ChatWindowRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule
  ]
})
export class ChatWindowModule { }
