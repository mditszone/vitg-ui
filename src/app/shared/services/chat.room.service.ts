import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChatUser } from '../model/chat-user';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {

  baseURL: string = environment?.config?.apiUrl
  constructor(public http: HttpClient) { }

  public updateChatRoom(chatMessage: ChatUser): Observable<any> {
    return this.http.post(this.baseURL + "/api/chatRoom/createChatRoom", chatMessage);
  }

}
