import { Component } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
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

  email!: string;
  password!: string;

  signupForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    terms: ['',Validators.required],
    password: ['',Validators.required],
    confirmPassword: ['',Validators.required],
  });
  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) {}




  signUpWithEmailAndPassword(){
    const userData = Object.assign(this.signupForm.value)
    this.authService.registerWithDetails(userData).then((res:any) => {
      this.router.navigateByUrl('/login');
    }).catch((err:any)=>{
      console.log(err)
    })
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
