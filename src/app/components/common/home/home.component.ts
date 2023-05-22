import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 testimonials = [
  {
    id:1,
    name:'Michael Otieno',
    role:'Client',
    message:'Fill in the vetting form and wait for results via email. If successful, proceed as per email details.'
  },
  {
    id:2,
    name:'Michael Otieno',
    role:'Client',
    message:'Fill in the vetting form and wait for results via email. If successful, proceed as per email details.'
  },
  {
    id:3,
    name:'Michael Otieno',
    role:'Client',
    message:'Fill in the vetting form and wait for results via email. If successful, proceed as per email details.'
  }
 ]


}
