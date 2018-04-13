import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModelGroup, NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  id: String;
  editMode: boolean;

  @ViewChild('f')
  private form: NgForm;
  // private form: NgModelGroup;
  // @ViewChild('form'): form;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;

          // console.log(this.form);
          let item = this.productService.getItem(this.id);

          console.log('item', item);
          // console.log({ name: item.name });
          // this.form.setValue({value: {_id: item._id}}); //.setValue takes complete form object as argument
          this.form.form.patchValue({name:item.name});
          this.form.form.patchValue({code:item.code});

          /*
          this.form.value._id = item._id,

          this.form.value.name = item.name,
          this.form.value.code = item.code,
          this.form.value.rate = item.rate,
          this.form.value.desc = item.desc,
          */
          console.log(this.form);
          
          console.log(item);
          
          // console.log(this.id);
          // console.log('Edit');
          
        }
      );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  // onSubmit(form: NgModelGroup) {
  onSubmit(form: NgForm) {
    form.value.offers = [{}];
    console.log(form);
    let resp = this.productService.save(form.value);

    console.log(resp);
    if(resp) {
      console.log('Resp => ',resp);
      form.reset();
    } 
    form.reset();
  }
}

