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
  }

  initializeForm(){
    this.form = this.formBuilder.group({
      email:['',[Validators.required,Validators.pattern("/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/")]],
      password:['',[Validators.required]],
    })
    }

}
