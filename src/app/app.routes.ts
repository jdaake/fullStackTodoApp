import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'users/login', component: LoginComponent },
    { path: 'users/signup', component: SignupComponent },
    { path: 'todos', component: TodoComponent },
    { path: '**', redirectTo: 'home' }
];

