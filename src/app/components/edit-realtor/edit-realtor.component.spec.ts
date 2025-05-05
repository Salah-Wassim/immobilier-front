import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRealtorComponent } from './edit-realtor.component';

describe('EditRealtorComponent', () => {
  let component: EditRealtorComponent;
  let fixture: ComponentFixture<EditRealtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRealtorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRealtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
