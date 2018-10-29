import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private loginService: LoginService) {
    this.username = this.loginService.username;
    this.password = this.loginService.password;
  }


  loginSubmit(username: string, password: string) {
    this.loginService.login();
  }

  ngOnInit() {
  }

}
