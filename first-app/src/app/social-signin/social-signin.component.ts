import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-signin',
  templateUrl: './social-signin.component.html',
  styleUrls: ['./social-signin.component.css'],
})
export class SocialSigninComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  facebookLogin() {}

  googleLogin() {}

  twitterLogin() {}
}
