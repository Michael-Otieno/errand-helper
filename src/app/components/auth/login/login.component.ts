import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  isLoggedIn:boolean = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) {}

  login(){
    const frm = this.loginForm.value;
    const email:string = frm.email!
    const password:string = frm.password!

    this.authService.SignIn(email, password)
    .then((user) =>{
      this.authService.storeUserDataInLocalStorage(user!)
    })

  }
  loginWithGoogle(){
    this.authService.GoogleAuth()
  }

  signUp() {
    console.log('sign up');
  }
}
