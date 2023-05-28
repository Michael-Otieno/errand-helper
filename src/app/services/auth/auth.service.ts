import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
// import {GoogleAuthProvider} from '@firebase/auth';
import { User } from 'src/app/interfaces/user.interface';
import * as auth from '@firebase/auth';

import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    private afs: AngularFirestore,
    private afa: AngularFireAuth,
    private route: Router,
    private ngz: NgZone
  ) {
    this.afa.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afa
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.SetUserData(res.user);
        this.afa.authState.subscribe((user) => {
          if (user) {
            this.route.navigateByUrl('/');
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Sign up with email/password
  SignUp(user:{firstName: string, lastName: string, email: string, terms: string, password: string, confirmPassword: string}) {
    return this.afa
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        this.SendVerificationMail();
        this.SetUserData(res.user);
        this.route.navigateByUrl('/login');
        return
      });
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afa.currentUser
      .then((user: any) => user.sendEmailVerification())
      .then(() => {
        this.route.navigateByUrl('/');
      });
  }


  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    const userData: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
    };

    return userRef.set(userData, { merge: true });
  }

  // Sign out
  SignOut() {
    return this.afa.signOut().then(() => {
      localStorage.removeItem('user');
      this.route.navigateByUrl('/login');
    });
  }
  // constructor(private afA:AngularFireAuth,private afDB: AngularFireDatabase) { }
  // loginWithGoogle(){
  //   return this.afA.signInWithPopup(new GoogleAuthProvider());
  // }
  // registerWithDetails(user:{firstName: string, lastName: string, email: string, terms: string, password: string, confirmPassword: string}){
  //   return this.afA.createUserWithEmailAndPassword(user.email,user.password)
  // }
  // loginWithEmailAndPassword(user:{email:string,password:string}){
  //   return this.afA.signInWithEmailAndPassword(user.email,user.password)
  // }
}
