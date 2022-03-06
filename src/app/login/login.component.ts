import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: string = '';
  username: string = 'sometext';
  errorMessage: string = 'Invalid username and password'
  invalidLogin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log("User Name: "+this.username);
    if(this.username === 'sometext' && this.password === 'abc') {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
