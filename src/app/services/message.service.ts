import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }
  messages: string;
  type: string;

  add(type:string, message: string) {
    this.type = type;
    this.messages = message;
  }

  clear() {
    this.messages = '';
  }
}
