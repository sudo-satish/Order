import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onNewItem(){
    console.log('Route to cpm ');
    
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
