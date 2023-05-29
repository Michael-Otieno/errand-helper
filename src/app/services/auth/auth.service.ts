import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
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
  ) {
    this.afa.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afa
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        // this.setUserData(res.credential);
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

  async signUp(user: User): Promise<void> {
    try {
      const { email, password, firstName, lastName } = user;
      const userCredential = await this.afa.createUserWithEmailAndPassword(
        email,
        password
      );

      await userCredential.user?.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });

      const userData: User = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        emailVerified:false,
        password: '', // Do not store the password in Firestore
        uid: userCredential.user?.uid,
      };

      await this.setUserData(userData);
    } catch (error) {
      // Handle error here
      console.log('Sign up error:', error);
    }
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afa.currentUser
      .then((user: any) => user.sendEmailVerification())
      .then(() => {
        this.route.navigateByUrl('/login');
      });
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.route.navigateByUrl('/');
    });
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afa
      .signInWithPopup(provider)
      .then((result: { user: any; }) => {
        this.route.navigate(['dashboard']);
        this.setUserData(result.user);
      })
      .catch((error: any) => {
        window.alert(error);
      });
  }

  private setUserData(user: User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    return userRef.set(user, { merge: true });
  }

  // Sign out
  SignOut() {
    return this.afa.signOut().then(() => {
      localStorage.removeItem('user');
      this.route.navigateByUrl('/');
    });
  }

}
