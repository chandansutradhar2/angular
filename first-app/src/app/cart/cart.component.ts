import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: '<h2>My Cart</h2>',
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
