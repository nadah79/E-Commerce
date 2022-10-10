import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})

 
export class PaymentComponent implements OnInit {
  login:boolean=false;
  cridet:boolean=false;
  type:string="cod";

  constructor(private fb:FormBuilder ,private router:Router) { }
  cities=["asyut","Cairo","Giza","Alexandria","Mansoura","Hurghada"];
  userNamePatern="^[A-Za-z]+$";

  userDataForm=this.fb.group({
    userName:['',[Validators.required,Validators.pattern(this.userNamePatern)]],
    city:['',[Validators.required]],
    Building:['',[Validators.required]],
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
  
  
  
  goToLogin(){
    if(!this.login)
    this.router.navigateByUrl('/auth/login');
  }
  goToStep2(){
    // if(!this.login)
    // this.router.navigateByUrl('/'+this.id);
  }
  onChange(e:any){
    this.type= e.target.value;
    if(this.type=="cod")
    this.cridet= false;
    if(this.type=="cridet")
    this.cridet= true;
  }
  closeForm(){
    this.cridet= false;

  }
 
  ngOnInit(): void {

  }

}

