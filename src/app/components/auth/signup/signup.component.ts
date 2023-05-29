import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  signupForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    terms: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {}

  register() {
    const frm = this.signupForm.value;

    const user = {
      firstName:frm.firstName!,
      lastName:frm.lastName!,
      email: frm.email!,
      terms:frm.terms!,
      emailVerified:false,
      password:frm.password!,
    };

    this.authService.signUp(user)
    this.route.navigateByUrl('/login');
  }


  onSubmit() {
    console.log(this.signupForm.value);
  }
}
