import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicallyComponent } from './dynamically.component';

describe('DynamicallyComponent', () => {
  let component: DynamicallyComponent;
  let fixture: ComponentFixture<DynamicallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
