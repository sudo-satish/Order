import { Router } from '@angular/router';
// import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MessageService } from '../services/message.service';
import { Client } from './models/client.model';
// import { Client } from './models/client.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  token: string = '';
  user: any = {};
  constructor(private router: Router,
              private httpClient: HttpClient,
              private messageService: MessageService
              ) {}

  signupUser(email: string, password: string) {
    // console.log(email, password);
    this.httpClient.post('/auth/signup', {email,password}).subscribe(data => {
      var token = data['tokens'][0].token;
      this.messageService.add('success', 'Signup Successful. You are login now.');
    },
  
    (err) => {
      if (err['error']['errmsg']) {
        this.messageService.add('error', err['error']['errmsg']);
      }
    });
  }

  signinUser(email: string, password: string) {

    this.httpClient.post('/auth/signin', { email, password }).subscribe(data => {
      
      if( data['error']) {
        this.messageService.add('error', 'Login Failed');
      } else {
        var token = data['tokens'][0].token;
        this.user = data;
        this.token = token;
        this.messageService.add('success', 'Login Successful');
        this.router.navigate(['']);
      }
    }, (err) => {
      this.messageService.add('error', 'Login Failed');
    });
  }

  logout() {
    this.token = '';
    this.user = '';
    this.messageService.add('success', 'Logout Successfully');
  }

  getToken() {
    
    return this.token;
  }

  isAuthenticated() {
    
    return  this.token !== '';
  }

  getUser() {
    return this.user;
  }

  createClient(client:Client) {
    return this.httpClient.post('/auth/client', client);
  }
  updateClient(client:Client) {
    return this.httpClient.put('/auth/client', client);
  }
  getAllClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>('/auth/client');
  }
}
