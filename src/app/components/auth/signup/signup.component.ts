import { Component } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  signupForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    terms: ['',Validators.required],
    password: ['',Validators.required],
    confirmPassword: ['',Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  signUp() {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
    console.log(this.signupForm.value);
  }
}
