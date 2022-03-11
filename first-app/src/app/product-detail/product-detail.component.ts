import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  products: Product[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');
    if (token) {
      this.http
        .get('http://localhost:8000/product/getAllProduct', {
          headers: {
            token: token,
          },
        })
        .subscribe(
          (r: any) => {
            console.log('product recieved', r);
            this.products = r as Product[];
          },
          (err) => console.log(err)
        );
    } else {
      console.log('no token exists...');
    }
  }
}
