import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    // this.fetchData();
    // this.transformData();

    // this.printData();

    this.fun1().then((r) => {
      console.log('promise returned', r);
    });
    this.fun2().subscribe((val) => console.log(val));
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

  fun1() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        console.log('inside setInterval');
        resolve(Date.now());
        console.log('after resolve ');
      }, 2000);
    });
  }

  fun2() {
    return new Observable((obs) => {
      setInterval(() => {
        console.log('inside setInterval');
        obs.next(Date.now());
      }, 2000);
    });
  }
}
