import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { VettingComponent } from './components/work/vetting/vetting.component';
import { BookComponent } from './components/service/book/book.component';
import { HomeComponent } from './components/common/home/home.component';
import { TestimonialComponent } from './components/common/home/testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VettingComponent,
    BookComponent,
    HomeComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
