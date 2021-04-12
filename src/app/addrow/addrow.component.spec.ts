import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrowComponent } from './addrow.component';

describe('AddrowComponent', () => {
  let component: AddrowComponent;
  let fixture: ComponentFixture<AddrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
