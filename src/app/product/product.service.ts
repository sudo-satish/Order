import { Router, ActivatedRoute } from '@angular/router';
// import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../services/message.service';
import * as _ from 'lodash';

@Injectable()
export class ProductService {
  token: string;
  items: any[];

  constructor(private router: Router,
              private httpClient: HttpClient,
              private messageService: MessageService,
              private route: ActivatedRoute
              ) {
        this.httpClient.get('/product/item').subscribe((items:any[]) => {
          this.items = items;
        });    
  }
  save(value) {

    this.httpClient.post('/product/item', value).subscribe(res => {
      this.messageService.add('success', JSON.stringify(res));
      // this.router.navigate(['../'], { relativeTo: this.route });
      // this.router.navigate[(['../'], {relativeTo: this.route});
      return res;
    }, err => {
      this.messageService.add('error', JSON.stringify(err));
      return false;
    }
  );
  }

  getItems() {
    return this.items;
  }
  getItem(id) {
    console.log(this.items);
    
    let item = _.find(this.items, {_id:id});
    console.log('item => ', item);
    
    return item;
  }
/*
  signupUser(email: string, password: string) {
    // console.log(email, password);
    this.httpClient.post('/product/item', {email,password}).subscribe(data => {
      var token = data['tokens'][0].token;
      localStorage.setItem('token', token);
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
      console.log(data);
      if( data['error']) {
        this.messageService.add('error', 'Login Failed');
      } else {
        var token = data['tokens'][0].token;
        localStorage.setItem('token', token);
        this.messageService.add('success', 'Login Successful');
      }
    }, (err) => {
      this.messageService.add('error', 'Login Failed');
      console.log(err);

    });
  }

  logout() {
    // firebase.auth().signOut();
    
    localStorage.setItem('token', '');
    this.messageService.add('success', 'Logout Successfully');
  }

  getToken() {
    // firebase.auth().currentUser.getToken()
    //   .then(
    //     (token: string) => this.token = token
    //   );
    return this.token;
  }

  isAuthenticated() {
    let token = localStorage.getItem('token');
    return  token !== '';
  }
  */
}
