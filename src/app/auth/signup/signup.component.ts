import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formGrp:FormGroup
  userTypes:any[]=[{display:'I WANT TO DONATE FOOD', value:'DONATOR'},{
    value:'RECIEVER', display:'I AM LOOKING FOR FOOD',
  }];

  constructor(private fb:FormBuilder) {
    this.formGrp=fb.group({
      fullName:['',Validators.required,[Validators.pattern(/^[a-zA-Z]+$/)]],
      email:['',Validators.required,[Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      mobileNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      userType:['',[Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  createAccount(){

  }
}
