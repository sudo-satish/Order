import { Router } from '@angular/router';
// import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router,
              private httpClient: HttpClient
              ) {}

  signupUser(email: string, password: string) {
    // console.log(email, password);
    this.httpClient.post('/auth/signup', {email,password}).subscribe(data => {
      var token = data['tokens'][0].token;
      localStorage.setItem('token', token);
    },
  
    (err) => {
      console.log(err);
      
    });
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .catch(
    //     error => console.log(error)
    //   )
  }

  signinUser(email: string, password: string) {

    this.httpClient.post('/auth/signin', { email, password }).subscribe(data => {
        var token = data['tokens'][0].token;
        localStorage.setItem('token', token);
      },
      (err) => {
        console.log(err);

    });
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(
    //     response => {
    //       this.router.navigate(['/']);
    //       firebase.auth().currentUser.getToken()
    //         .then(
    //           (token: string) => this.token = token
    //         )
    //     }
    //   )
    //   .catch(
    //     error => console.log(error)
    //   );
  }

  logout() {
    // firebase.auth().signOut();
    localStorage.setItem('token', '');
  }

  getToken() {
    // firebase.auth().currentUser.getToken()
    //   .then(
    //     (token: string) => this.token = token
    //   );
    return this.token;
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== '';
  }
}
