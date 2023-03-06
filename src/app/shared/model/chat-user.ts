export class ChatUser{
    userId: string;
    supportTeamId: number;
    userName: string;
    content: string;
    messages: string[] = [];
    sender: false;
    isAccepted: boolean = false;
}