import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var token = localStorage.getItem('token');
    if (token) {
      console.log('Order comp => ', token);
      
    }
  }

}
