import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-cartcompo',
  templateUrl: './cartcompo.component.html',
  styleUrls: ['./cartcompo.component.scss']
})
export class CartcompoComponent implements OnInit ,DoCheck{
  getcartarr:any[]=[]
amount:number=1
total:any=0
totalnumber:any=0
  constructor() { }

  ngOnInit(): void {
    this.getcardetails()

  } 

  ngDoCheck(): void {
   this. getcardtotlal()
   this.totalnumber
  }

///////////////////////////////////////////////////////////////////////////////////////////////////

  getcardetails(){
    
    this.getcartarr= JSON.parse(localStorage.getItem("cart")!)
    
    console.log( this.getcartarr)
    this.getcardtotlal()
  }


////////////////////////////////////////////////////////////////////////////////
  deleteproduct(i:number){
    this.getcardtotlal()
  this.getcartarr.splice(i,1)
  localStorage.setItem("cart",JSON.stringify(this.getcartarr))
  
  }
  getcardtotlal(){
this.totalnumber=0

for (let x in this.getcartarr){
  this.totalnumber+= this.getcartarr[x].price * this.amount
  localStorage.setItem("cart",JSON.stringify(this.getcartarr))


}
 
  }
////////////////////////////////////////////////////
clearproduct(){
  this.getcartarr=[]
  localStorage.setItem("cart",JSON.stringify(this.getcartarr))
 this. getcardtotlal()
}



}
