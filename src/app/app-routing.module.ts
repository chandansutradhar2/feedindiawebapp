import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DonateSectionComponent } from './donate-section/donate-section.component';
import { LayoutComponent } from './layout/layout.component';
import { RecieverSectionComponent } from './reciever-section/reciever-section.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'home', component:LayoutComponent
  },
  {
    path:'signup', component:SignupComponent
  },{
    path:'donate' , component:DonateSectionComponent
  },
  {
    path:'food', component:RecieverSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
