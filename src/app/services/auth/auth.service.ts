import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/interfaces/user.interface';
import * as auth from '@firebase/auth';
import { Observable, BehaviorSubject, map } from 'rxjs';


import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();


  userData: any;


  constructor(
    private afs: AngularFirestore,
    private afa: AngularFireAuth,
    private route: Router,
  ) {
    this.afa.authState.subscribe((user) => {
      if (user) {
        this.getUserData(user.uid).subscribe((userData) => {
          this.currentUserSubject.next(userData);
        });
      } else {
        this.currentUserSubject.next(null);
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
            this.route.navigateByUrl('/profile');
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
    return userRef.set(user);
  }

  private getUserData(uid: string): Observable<User | null> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`users/${uid}`);
    return userRef.valueChanges().pipe(
      map((userData: any) => userData || null)
    );
  }

  storeUserDataInLocalStorage(user:User):void{
    localStorage.setItem('user',JSON.stringify(user))
  }

  getCurrentUserFromLocalStorage():User | null {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }



  // Sign out
  SignOut() {
    return this.afa.signOut().then(() => {
      localStorage.removeItem('user');
      this.route.navigateByUrl('/');
    });
  }

}
