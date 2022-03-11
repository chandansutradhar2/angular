import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  title: string = 'Login';
  email!: string;
  password!: string;

  constructor() {}

  ngOnInit(): void {}

  login(ev1: any, ev2: any) {
    console.log(ev1.value, ev2.value);
    this.email = ev1.value;
    this.password = ev2.value;

    alert('login invoked');
  }

  connectToDb() {}

  showSpinner() {}

  hideSpinner() {}
}
