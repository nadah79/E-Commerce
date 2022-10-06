import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  // constructor(private regiserationService:RegiserationService,private fb:FormBuilder ) { }

  constructor(private fb:FormBuilder) { }
  Apps=["facebook","twitter","google"];
  userNamePatern="^[A-Za-z]+$";
  passwordpatern="^[0-9]{8}$" ;
  emailpatern="^[a-z]+@[a-z]+\.com+$";
  // Validators.email

  registerationForm=this.fb.group({
    userName:['',[Validators.required,Validators.pattern(this.userNamePatern)]],
    password:['',[Validators.required,Validators.pattern(this.passwordpatern)]],
    confirmPassword:['',[Validators.required,Validators.pattern(this.passwordpatern)]],
    email:['',[Validators.required,Validators.pattern(this.emailpatern)]],
    socialApp:['',[Validators.required]]

  })

  get userName (){
    return this.registerationForm.get('userName')
  } 
  get password(){
    return this.registerationForm.get('password')
  }
  get confirmPassword(){
    return this.registerationForm.get('confirmPassword')
  }
  get email(){
    return this.registerationForm.get('email')
  } 
  get socialApp(){
    return this.registerationForm.get('socialApp')
  } 
  // onRegister(){
  //   this.regiserationService.regiserUser(this.registerationForm.value);
  //   this.registerationForm.reset();
  //   // console.log(this.userService.getUsersFromLocal());
  // }

  ngOnInit(): void {
  }

}
