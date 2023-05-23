import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  @Input() test:{name:string,role:string,message:string}={
    name: '',
    role: '',
    message: ''
  }

  selectedIndex = 0;
}
