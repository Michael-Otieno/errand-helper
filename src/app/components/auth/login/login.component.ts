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
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) {}


  loginWithGoogle(){
    this.authService.loginWithGoogle().then((res:any)=>{
      this.router.navigateByUrl('/')
      localStorage.setItem('user', JSON.stringify(res.user));

    }).catch((err:any)=>{
      console.log(err)
    })
  }

  loginWithEmailAndPassword(){
    const userData = Object.assign(this.loginForm.value)
    this.authService.loginWithEmailAndPassword(userData).then((res:any) => {
      this.router.navigateByUrl('/');
      localStorage.setItem('user', JSON.stringify(res.user));
    }).catch((err:any)=>{
      console.log(err)
    })
  }

  signUp() {
    console.log('sign up');
  }
}
