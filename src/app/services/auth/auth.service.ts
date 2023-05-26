import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {GoogleAuthProvider} from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afA:AngularFireAuth,private afDB: AngularFireDatabase) { }

  loginWithGoogle(){
    return this.afA.signInWithPopup(new GoogleAuthProvider());
  }

  registerWithDetails(user:{firstName: string, lastName: string, email: string, terms: string, password: string, confirmPassword: string}){
    return this.afA.createUserWithEmailAndPassword(user.email,user.password)
  }


  loginWithEmailAndPassword(user:{email:string,password:string}){
    return this.afA.signInWithEmailAndPassword(user.email,user.password)
  }


}
