import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: '<h2>My Cart</h2>',
})
export class CartComponent {
  constructor() {
    console.log('cart component loaded');
  }
}