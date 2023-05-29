import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user: User | null = null;

  constructor(private authService: AuthService){
    this.authService.currentUser$.subscribe((user) => {
      this.user = user;

      console.log(user?.firstName)
    })
  }

  submit() {
    throw new Error('Method not implemented.');
  }
}
