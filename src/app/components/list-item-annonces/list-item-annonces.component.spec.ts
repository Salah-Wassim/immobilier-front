import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemAnnoncesComponent } from './list-item-annonces.component';

describe('ListItemAnnoncesComponent', () => {
  let component: ListItemAnnoncesComponent;
  let fixture: ComponentFixture<ListItemAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemAnnoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
