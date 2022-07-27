import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  
  formGrp: FormGroup;
  userTypes: any[] = [
    { display: 'I WANT TO DONATE FOOD', value: 'DONATOR' },
    {
      value: 'RECIEVER',
      display: 'I AM LOOKING FOR FOOD',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private spinner: NgxSpinnerService
  ) {
    this.formGrp = fb.group({
      fullName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNo: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      userType: [this.userTypes, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  createAccount() {
    if (this.formGrp.invalid) {
      Swal.fire({
        title: 'Incomplete Form',
        text: 'Please fill up all the fields before submitting',
      });
      return;
    }
    this.spinner.show();
    let data = this.formGrp.value;
    let user: User = {
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      mobileNo: data.mobileNo,
      userType: data.userType,
    };

    this.auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        if (res.user) {
          user._id = res.user.uid;
          this.db
            .collection('users')
            .doc()
            .set(user)
            .then((res) => {
              Swal.fire({
                title: 'Success',
                text: 'Account created successfully',
              });
            })
            .catch((err) => {
              Swal.fire({
                title: 'Error',
                text: 'Failed to create account',
              });
            })
            .finally(() => {
              this.spinner.hide();
            });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Account could not be created at this moment. please try again',
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error',
          text: err,
        });
      }).finally(()=>this.spinner.hide());
  }
}
