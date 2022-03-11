import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  token: string = '';
  products: Product[] = [];

  constructor(private http: HttpClient) {
    let tmp = sessionStorage.getItem('token');
    if (tmp) {
      this.token = tmp;
    }
  }

  getAllProduct(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      if (this.token) {
        this.http
          .get('http://localhost:8000/product/getAllProduct', {
            headers: {
              token: this.token,
            },
          })
          .subscribe(
            (r: any) => {
              console.log('product recieved', r);
              this.products = r as Product[];
              resolve(this.products);
            },
            (err) => reject(err)
          );
      } else {
        reject('no token exists');
      }
    });
  }

  deleteProduct() {}

  addProduct() {}

  updateProduct() {}
}
