import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from '../models/client.model';
import { AuthService } from '../auth.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.css']
})
export class ClientSignupComponent implements OnInit {

  // client: Client = new Client({name:'Burger King'});
  client: Client = new Client({});
  clients: Client[];
  form: FormGroup;
  editMode: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getAllClients();
    let formGroup:any = {};
    // let FormControl = new FormControl();
    // this.client = new Client({
    //   _id:'_id',
    //   phone: 'phone?: string',
    //   email: 'email?: string',
    //   name: 'name?: string',
    //   owner_name: 'Owner string',
    //   owner_no : 'Owner_no string',
    //   active: false
    // });
    // this.client = new Client({
    //   name: 'Khan',
    // });
    console.log('Client Name', this.client.name);
    
    formGroup['_id'] = new FormControl(this.client._id);
    formGroup['phone'] = new FormControl(this.client.phone, [Validators.required]);
    formGroup['name'] = new FormControl(this.client.name);
    formGroup['owner_name'] = new FormControl(this.client.owner_name);
    formGroup['owner_no'] = new FormControl(this.client.owner_no);
    formGroup['email'] = new FormControl(this.client.email, [Validators.email]);
    // formGroup['password'] = new FormControl(this.client.password);
    formGroup['active'] = new FormControl(this.client.active);
    // new FormGroup([0: {new FormControl()}]);

    this.form = new FormGroup(formGroup);
  }

  onSubmit() {
    console.log(this.form.value);
    if(this.editMode) {
      this.authService.updateClient(this.form.value).subscribe((res) => {
        // this.messageService.add('success', JSON.stringify(res));
        // this.updateForm();
        this.resetForm();
      }, (err) => {
          // this.messageService.add('error', JSON.stringify(err));
        });;
    } else {
      this.authService.createClient(this.form.value).subscribe((res) => {
        // this.messageService.add('success', JSON.stringify(res));
        this.resetForm();
      }, (err) => {
          // this.messageService.add('error', JSON.stringify(err));
        });;
    }
  }

  resetForm() {
    this.form.reset();
    this.editMode = false;
    this.refreshGrid();
  }

  refreshGrid() {
    this.getAllClients();
  }

  getAllClients(){
    this.authService.getAllClients().subscribe((res:Client[]) => {
      // this.messageService.add('success', JSON.stringify(res));
       console.log('All Clients => ', res);
       //return res;
       this.clients = res;
    }, (err) => {
        console.log('All Clients Err => ', err);
        // this.messageService.add('error', JSON.stringify(err));
       //return false;

      });
    // console.log('clients => ', clients);
    // return clients;
  }

  onEdit(id) {
    this.editMode = true;

    console.log('On Edit Clicked => ');
    
    let client = _.find(this.clients, {_id:id});

    // client = client.slice();
    typeof client._v === undefined? '': delete client['__v'];
    // if()
    console.log('Onedit Client => ', client);
    this.client = client;
    this.form.setValue(client);
    
  }
  onNew() {
    
    this.form.reset();
    this.editMode = false;
  }

}
