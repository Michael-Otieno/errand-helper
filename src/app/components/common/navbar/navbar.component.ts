import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  matMenu: any;

  @Input()
  menuType!: string;

  constructor(private route: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (localStorage.getItem('user') === null) {
        this.menuType = 'default';
      } else {
        this.menuType = 'authenticated';
      }
    });
  }

  logout(){
    this.authService.SignOut();
  }
}
