import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from '../Services/AddressService/address.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})

 
export class PaymentComponent implements OnInit {
  // cridet:boolean=false;
  // cod:boolean=false;
  type:boolean=false;
  isAddress:boolean=false;

  constructor(private fb:FormBuilder ,private router:Router ,private addressservice:AddressService) { }
  cities=["asyut","Cairo","Giza","Alexandria","Mansoura","Hurghada"];
  buldingPatern="^[0-9]+$";
  cardNoPatern="^[0-9]{16}"
  userDataForm=this.fb.group({
    userName:['',[Validators.required]],
    city:['asyut'],
    Building:['',[Validators.required, Validators.pattern(this.buldingPatern)]],
    Street:['',[Validators.required]]

  })

  get userName (){
    return this.userDataForm.get('userName')
  }  
  get city(){
    return this.userDataForm.get('city')
  }
  get Building(){
    return this.userDataForm.get('Building')
  } 
  get Street(){
    return this.userDataForm.get('Street')
  } 
  
  
  
  addAdress(){
    if(!this.userDataForm.valid) return;

    this.addressservice.addAdress(this.userDataForm.value);
    this.isAddress=true;
  }
  goToStep2(){
    // if(!this.login)
    // this.router.navigateByUrl('/'+this.id);
  }
  onChange(e:any){
    // this.type= e.target.value;
    if(e.target.value=="cod")
    this.type= true;
    if(e.target.value=="cridet")
    this.type= true;
  }
  closeForm(){
    // this.cridet= false;

  }

  cardForm=this.fb.group({
    cardName:['',[Validators.required]],
    cardNo:['',[Validators.required, Validators.pattern(this.cardNoPatern)]],

  })
  get cardName(){
    return this.cardForm.get("cardName")
  }
  get cardNo(){
    return this.cardForm.get("cardNo")
  }
  ngOnInit(): void {

  }
}

