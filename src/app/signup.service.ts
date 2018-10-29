import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  username: string;
  password: string;

  constructor(private http: HttpClient) { }

  signUp() {
    console.log('Creating new user and password');
    return this.http.post('../expressServer/routes/users.routes.js', { username: this.username, password: this.password });
  }
}

