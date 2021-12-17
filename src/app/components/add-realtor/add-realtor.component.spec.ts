import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRealtorComponent } from './add-realtor.component';

describe('AddRealtorComponent', () => {
  let component: AddRealtorComponent;
  let fixture: ComponentFixture<AddRealtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRealtorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRealtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
