import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn: boolean = false;
  @Input() title: string = '';
  @Output() logoutSuccess: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    console.log('isloggedIn', this.isLoggedIn);
  }

  ngOnInit(): void {
    console.log('isloggedIn', this.isLoggedIn);
    console.log('title', this.title);
  }

  logout() {
    this.logoutSuccess.emit(false);
  }
}
