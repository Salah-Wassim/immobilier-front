import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAvantageComponent } from './edit-avantage.component';

describe('EditAvantageComponent', () => {
  let component: EditAvantageComponent;
  let fixture: ComponentFixture<EditAvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAvantageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
