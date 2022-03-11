import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: ` <button mat-icon-button class="example-icon">
    <mat-icon>shopping_bag</mat-icon>
  </button>`,
  styles: [
    `
      .header {
        background-color: 'red';
      }
    `,
  ],
})
export class CartComponent {
  constructor() {
    console.log('cart component loaded');
  }
}
