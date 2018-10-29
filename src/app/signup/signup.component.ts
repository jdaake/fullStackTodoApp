import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string;
  password: string;
  confirmPassword: string;

  constructor(private signUpService: SignupService) {
    this.username = this.signUpService.username;
    this.password = this.signUpService.password;
  }


  signUp(username: String, password: String) {
    if (this.password !== this.confirmPassword) {
      console.log('Passwords do not match');
    } else {
      this.signUpService.signUp();
    }
  }

  ngOnInit() {
  }

}
