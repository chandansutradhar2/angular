import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn: boolean = false;
  @Input() title: string = '';
  constructor() {
    console.log('isloggedIn', this.isLoggedIn);
  }

  ngOnInit(): void {
    console.log('isloggedIn', this.isLoggedIn);
    console.log('title', this.title);
  }
}
