import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import User from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'Nike';
  isLoggedIn: boolean = true;
  constructor(private http: HttpClient) {}
}
