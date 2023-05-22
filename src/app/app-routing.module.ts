import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/common/home/home.component';
import { VettingComponent } from './components/work/vetting/vetting.component';
import { BookComponent } from './components/service/book/book.component';
import { SignupComponent } from './components/auth/signup/signup.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'signup', component:SignupComponent},
  {path:'vetting', component:VettingComponent},
  {path:'book', component:BookComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
