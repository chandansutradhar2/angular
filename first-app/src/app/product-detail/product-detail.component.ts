import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
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
          (r) => {
            console.log('product recieved', r);
          },
          (err) => console.log(err)
        );
    } else {
      console.log('no token exists...');
    }
  }
}
