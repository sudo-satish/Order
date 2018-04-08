import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private authService: AuthService
  ){
    let token = localStorage.getItem('token'); // Initialize the token
    console.log('token');
    console.log(token);
    
  }
  title = 'app';
  onLogout() {
    this.authService.logout();
  }
  
}
