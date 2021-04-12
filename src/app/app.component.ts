import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  columns = [{
    title: "NAME",
    data: "name"
  },
  {
    title: "CITY",
    data: "city"
  },
  {
    title: "HollyMolly",
    data: "nothing"
  }];

  datas = [
    {
      name: "US",
      city: "Newyork",
      nothing: "everest"
    },
    {
      name: "USA",
      city: "city"
    },
    {
      name: "Japan",

      parent: {
        first: {
          city: "Tokyo"
        }
      }
    },
    {
      name: "Japan",

      parent: {
        first: {
          city: "Tokyo"
        }
      }
    },
    {
      name: "Japan",

      parent: {
        first: {
          city: "Tokyo"
        }
      }
    },
    {
      name: "Japan",

      parent: {
        first: {
          city: "Tokyo"
        }
      }
    },
    {
      name: "Indiana",

      parent: {
        first: {
          city: "king"
        }
      }
    },
    {
      name: "UK",
      parent: {
        city: "London"
      }
    }
  ];

  getData(data: any, label: any): any {

    if (!data[label]) {

      for (var x in data) {
        if (typeof data[x] === 'object') {
          return this.getData(data[x], label)
        }
      }
    }

    return data[label];
  }

}
