import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremoveComponent } from './addremove.component';

describe('AddremoveComponent', () => {
  let component: AddremoveComponent;
  let fixture: ComponentFixture<AddremoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddremoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
