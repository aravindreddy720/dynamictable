import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-storedata',
  templateUrl: './storedata.component.html',
  styleUrls: ['./storedata.component.css']
})
export class StoredataComponent implements OnInit {

  display: string | any;
  display1: string | any;
  scribble: string | any;
  dis: any;
  FIRSTNAME: string | any;
  LASTNAME: string | any;
  AGE: string | any;
  json: string|any;
  mapped: string | any;

  arr : Array<any> = [];

  columns = ["FIRSTNAME", "LASTNAME", "AGE"]

  constructor(private shared: SharedService) {

    // console.log(this.shared.fetch);
    // this.display = this.shared.fetch;  

    console.log(this.shared.fetch1);
    this.display1 = this.shared.fetch1;

    this.json = JSON.parse(this.display1);

     this.mapped = Object.entries(this.json).map(([key, value]) => ({key, value}));
     this.arr.push(this.mapped);
     console.log(this.arr);
  

    // console.log(this.mapped);

    //  this.FIRSTNAME = json["fname"];
    //  this.LASTNAME = json.lname;
    //  this.AGE = json.age;
   
  }

  ngOnInit(): void {
    localStorage.setItem("dis", this.shared.fetch1);
    console.log(localStorage.getItem("dis"));
  }

  // method(){
  //   this.arr.push(this.mapped);
  //   console.log(this.arr);
  // }
}
