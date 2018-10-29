import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username: string;
  password: string;

  constructor(private http: HttpClient) { }

  login() {
    console.log('Verifying Username and Password');
    return this.http.post('http://localhost:3000/users/login', { username: this.username, password: this.password })
      .subscribe(() => console.log('Why doesnt this work?'));

    // .map((res: Response) => res.json());

  }
}
