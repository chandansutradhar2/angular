import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  title: string = 'Login';
  email!: string;
  password!: string;

  @Output() loginSuccess: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  login() {
    alert(this.email + ':' + this.password);
    //user logged in succesfully
    this.loginSuccess.emit(true);
  }

  connectToDb() {}

  showSpinner() {}

  hideSpinner() {}
}
