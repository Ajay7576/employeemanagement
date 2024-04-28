import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToListEmployeeComponent } from './add-to-list-employee.component';

describe('AddToListEmployeeComponent', () => {
  let component: AddToListEmployeeComponent;
  let fixture: ComponentFixture<AddToListEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToListEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToListEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
