import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRowStoredataComponent } from './add-row-storedata.component';

describe('AddRowStoredataComponent', () => {
  let component: AddRowStoredataComponent;
  let fixture: ComponentFixture<AddRowStoredataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRowStoredataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRowStoredataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
