import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPopUpComponent } from './custom-pop-up.component';

describe('CustomPopUpComponent', () => {
  let component: CustomPopUpComponent;
  let fixture: ComponentFixture<CustomPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
