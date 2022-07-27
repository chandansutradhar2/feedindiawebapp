import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGrp:FormGroup

  constructor(private fb:FormBuilder,    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private spinner: NgxSpinnerService,
    private router:Router
) {
    this.formGrp=fb.group({
      email:['', [Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  login(){
    if(this.formGrp.invalid){
      console.log(this.formGrp.controls)
      Swal.fire({
        title:"Incomplete Details",
        "text":"Please enter email id and password correctly"
      })
      return;
    }
    this.spinner.show();
    let data=this.formGrp.value;
    this.auth.signInWithEmailAndPassword(data.email,data.password).then(res=>{
      if(res.user){
       Swal.fire({
        title:"Success",
        text:"Logged in successfull",
        timer:3000,
        didClose:()=>{
          this.router.navigate(['home'])
        }
       });

      }else{
        Swal.fire({
          title:"Error",
          text:"Invalid credentials"
         })
      }
    }).catch((err)=>{
      console.log(err);
      Swal.fire({
        title:"Error",
        text:"Invalid credentials"
       })
    }).finally(()=>{
      this.spinner.hide();
    })

  }
}
