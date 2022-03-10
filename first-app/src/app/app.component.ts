import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    this.fetchData();
    this.transformData();
    this.printData();
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
}
