import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvantagesComponent } from './list-avantages.component';

describe('ListAvantagesComponent', () => {
  let component: ListAvantagesComponent;
  let fixture: ComponentFixture<ListAvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvantagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
