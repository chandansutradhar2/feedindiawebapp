import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGrp:FormGroup

  constructor(private fb:FormBuilder) {
    this.formGrp=fb.group({
      email:['', [Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  login(){
    
  }
}