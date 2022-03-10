import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import User from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private http: HttpClient) {
    //fetch user data based on local storage
    //let user: User = localStorage.getItem('user');
    //code to connec to server to fetch the user profile
    // http
    //   .get(
    //     `http://localhost/user/current?userId=${user.id}&password=${user.password}`
    //   )
    //   .toPromise();
    // this.fun1()
    //   .then((r) => {
    //     //console.log('promise returned'+ r);
    //   })
    //   .catch((err) => {
    //     console.log('proimsed failed with reason', err);
    //   })
    //   .finally(() => console.log('clean up finally code'));
    // this.fun2().subscribe(
    //   (val) => console.log(val),
    //   (err) => {}
    // );
  }

  fetchData() {
    //todo logic to fetch data from server
    setTimeout(() => {
      console.log('fetch data invoked');
    }, 4000);
  }

  transformData() {
    //todo: to convert ethe downloaded data to a format
    console.log('transform data invoked');
  }

  printData() {
    //print the data into view
    console.log('print data invoked');
  }

  // fun1(): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(true);
  //       //reject('network connection aborted');
  //     }, 2000);
  //   });
  // }

  // fun2() {
  //   return new Observable((obs) => {
  //     setInterval(() => {
  //       console.log('inside setInterval');
  //       obs.next(Date.now());
  //     }, 2000);
  //   });
  // }
}
