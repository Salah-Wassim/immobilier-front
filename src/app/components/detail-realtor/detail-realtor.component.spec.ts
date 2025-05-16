import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRealtorComponent } from './detail-realtor.component';

describe('DetailRealtorComponent', () => {
  let component: DetailRealtorComponent;
  let fixture: ComponentFixture<DetailRealtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRealtorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRealtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
