import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import * as _ from 'lodash';

const phone = document.getElementById('phone'); 

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})

export class PaymentFormComponent implements OnInit {

  phone;
  firstname;
  lastname;
  email;
  address;
  phoneNumbers = [
      {phone: '8130626713', firstname:'Satish', lastname:'Gupta', email:'satishkumr001@gmail.com', address:'Shyam Colony'},
      {phone: '9873393248', firstname: 'Nitin', lastname: 'Gupta', email: 'nitingupta@gmail.com', address: 'Shyam Colony' },
  ];
  constructor(private cart: CartService,
  
  ) { }

  ngOnInit() {

   // console.log(phone);
    
  }

  autoFillFormData(){
    
    if(this.phone.length == 10) {
      console.log(this.phone);
      
      let formObj = _.find(this.phoneNumbers, {phone:this.phone});
      console.log(formObj);
      
      this.phone = formObj.phone;
      this.firstname = formObj.firstname;
      this.lastname = formObj.lastname;
      this.email = formObj.email;
      this.address = formObj.address;
    }
    else {
      // this.phone = '';
      this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.address = '';
    }
    
  }

  onSubmit(){
    if(this.phone.length !== 10) {
      alert('Not a valid phone number');
      return false;
    } else {
      let user = _.find(this.phoneNumbers, { phone: this.phone });
      console.log(user);
      
      this.cart.placeOrder(user);
    }
  }  
}
