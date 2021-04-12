import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamically',
  templateUrl: './dynamically.component.html',
  styleUrls: ['./dynamically.component.css']
})
export class DynamicallyComponent implements OnInit {

  constructor() { }

  columns = ['id', 'name', 'age', 'company', 'Email'];

  setData(data: string, title: string) {
    if (!title) return "hi"
    return data;
  }

  data = [
    {
      "id": "720",
      "age": "25",
      "name": "black",
      "company": "Peace",
      "Email": "nature@god.com"
    },
    {
      "id": "730",
      "age": "24",
      "name": "curry",
      "company": "Peace",
      "Email": "nature@god.com"
    },
    {
      "id": "740",
      "age": "29",
      "name": "westbrook",
      "company": "Peace",
      "Email": "nature@god.com"
    },
    {
      "id": "740",
      "age": "29",
      "name": "westbrook",
      "company": "wizards",

    },
    {
      "id": "12345",
      "age": "36",
      "name": "irving",
      "company": "brokyln",
      "Email": "nature@god.com"
    },

  ];

  ngOnInit(): void {
  }

}
