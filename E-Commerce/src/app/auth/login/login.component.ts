import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
form! :FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  checkControl(control: string): boolean{
    let errors = this.form.controls[control]?.errors;
    if(errors != undefined){
      if(errors["required"]){
        return true;
      }
    }
    return false;
  }

  checkPatternControl(control: string): boolean{
    let errors = this.form.controls[control]?.errors;
    if(errors != undefined){
      if(errors["pattern"]){
        return true;
      }
    }
    return false;
  }
  initializeForm(){
    this.form = this.formBuilder.group({
      email:['',[Validators.required,Validators.pattern(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)]],
      password:['',[Validators.required]],
    })
    }
    onLogin(){
      // this.userService.regiserUser(this.form.value);
      // this.form.reset();
      // console.log(this.userService.getUsersFromLocal());
    }


    get email(){
      return this.form.controls['email'];
    }
  
    get password(){
      return this.form.controls['password'];
    }
  
    
}
