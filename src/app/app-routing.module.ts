import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/common/home/home.component';
import { VettingComponent } from './components/work/vetting/vetting.component';
import { BookComponent } from './components/service/book/book.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/work/profile/profile.component';
import { NotificationComponent } from './components/work/notification/notification.component';

const routes: Routes = [
  {path:'',pathMatch:'full', component:HomeComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'vetting', component:VettingComponent},
  {path:'profile', component:ProfileComponent},
  {path:'notifications', component:NotificationComponent},
  {path:'book', component:BookComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
