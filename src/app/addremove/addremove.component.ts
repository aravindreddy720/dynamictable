import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { GuardsCheckEnd } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-addremove',
  templateUrl: './addremove.component.html',
  styleUrls: ['./addremove.component.css']
})
export class AddremoveComponent implements OnInit {

  addForm: FormGroup | any;
  rows: FormArray | any; 
  // itemForm: FormGroup | any;

  constructor(private fb: FormBuilder, private shared: SharedService) {

    this.addForm = this.fb.group({
      FIRST_NAME: [null, Validators.required],
      LAST_NAME: [null, Validators.required], 
      AGE: [null, Validators.required],
    });

    this.rows = this.fb.array([]);

  }

  ngOnInit() {
    this.addForm.addControl('rows', this.rows);
  }

  onAddRow() {
    this.rows.push();
  }

  onRemoveRow(rowIndex: number) {
    this.rows.removeAt(rowIndex);
  }
  
  fetchData() {
  
    const fetchedData = JSON.stringify(this.addForm.value);
    //  console.log(fetchedData);
     alert(fetchedData);

   this.shared.fetch1=JSON.stringify(this.addForm.value);
}
}