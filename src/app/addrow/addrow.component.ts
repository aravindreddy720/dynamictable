import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-addrow',
  templateUrl: './addrow.component.html',
  styleUrls: ['./addrow.component.css']
})
export class AddrowComponent implements OnInit {
  [x: string]: any;

  addForm: FormGroup | any;
  rows: FormArray | any;
  itemForm: FormGroup | any; 
  name1: any;
  


  constructor(private fb: FormBuilder, private shared: SharedService) {
    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['', Validators.required]
    });

    this.rows = this.fb.array([]);

  }

  ngOnInit() {
    this.addForm.get("items").valueChanges.subscribe((val: boolean) => {

      if (val === true) {
        this.addForm.get("items_value").setValue("yes");
        this.addForm.addControl('rows', this.rows);
      }

      if (val === false) {
        this.addForm.get("items_value").setValue("no");
        this.addForm.removeControl('rows');
      }

    });
  }

  onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }

  onRemoveRow(rowIndex: number) {
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {

    return this.fb.group({ 

      name: null,
      description: null,
      qty: null

    });
  }
 
  fetchData() {
    this.shared.fetch = this.rows.value;
  }
}
 