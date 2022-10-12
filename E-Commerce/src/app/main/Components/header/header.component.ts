import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , DoCheck {
  getcartarr:any[]=[]
  cartlengt:number=0;
  constructor() { }

  ngOnInit(): void {

    
  }
  
  ngDoCheck(): void {
  this.  cartlength()
  this.cartlengt
}
 cartlength(){
    
    this.getcartarr= JSON.parse(localStorage.getItem("cart")!)


    this.cartlengt=this.getcartarr.length;
    console.log(this.cartlengt)


  }
}
