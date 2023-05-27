import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
matMenu: any;

  constructor(private route:Router){}

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('user')){
          this.isLoggedIn = true;
        }
      }
    })
  }


}
