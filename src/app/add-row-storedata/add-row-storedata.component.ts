import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-row-storedata',
  templateUrl: './add-row-storedata.component.html',
  styleUrls: ['./add-row-storedata.component.css']
})
export class AddRowStoredataComponent implements OnInit {

  stored: string | any;
  mapped: any;
  json: any;

  arr: Array<any> = [];

  columns = ["NAME", "DESCRIPTION", "QTY"]

  constructor(private shared: SharedService) {
    this.stored=this.shared.fetch;
    console.log(this.shared.fetch);

    this.json = this.shared.fetch;

    this.mapped = Object.entries(this.json).map(([key, value]) =>  ({key, value}));

     console.log(this.mapped);

     this.arr.push(this.mapped);
     console.log(this.arr);



   }
 
  ngOnInit(): void {
  }

}
