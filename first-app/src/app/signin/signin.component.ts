import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  //passing any class to contructor are handled by angular as dependecny
  //angular will inject thoses depencdency at runtime (dependency injection)
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  login() {
    //todo: send request to the restapi : http://localhost:8000/user/authenticate
    this.http
      .post('http://localhost:8000/user/authenticate', {
        Email: this.email,
        Password: this.password,
      })
      .subscribe(
        (res: any) => {
          if (res.result) {
            alert('token recieved:' + res.token);
            sessionStorage.setItem('token', res.token);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    this.loginSuccess.emit(true);
  }

  connectToDb() {}

  showSpinner() {}

  hideSpinner() {}
}
