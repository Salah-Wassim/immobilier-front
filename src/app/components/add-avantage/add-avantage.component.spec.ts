import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAvantageComponent } from './add-avantage.component';

describe('AddAvantageComponent', () => {
  let component: AddAvantageComponent;
  let fixture: ComponentFixture<AddAvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAvantageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
