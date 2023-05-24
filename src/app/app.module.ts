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
import { FooterComponent } from './components/common/footer/footer.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ButtonComponent } from './components/common/button/button.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/work/profile/profile.component';
import { NotificationComponent } from './components/work/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VettingComponent,
    BookComponent,
    HomeComponent,
    TestimonialComponent,
    FooterComponent,
    SignupComponent,
    ButtonComponent,
    LoginComponent,
    ProfileComponent,
    NotificationComponent
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
