import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import User from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showLogin: boolean = false;
  title: string = 'Nike';
  isLoggedIn: boolean = false;
  constructor(private http: HttpClient) {}

  manageSession(ev: boolean) {
    this.isLoggedIn = ev;
    this.isLoggedIn == true
      ? (this.showLogin = false)
      : (this.showLogin = true);
  }

  toggleLogin() {
    this.showLogin = true;
  }
}
