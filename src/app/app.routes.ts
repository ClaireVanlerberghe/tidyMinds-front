import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"signup", component: SignupComponent},
    {path:"login", component: LoginComponent},
];
