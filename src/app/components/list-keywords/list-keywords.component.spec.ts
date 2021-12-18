import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKeywordsComponent } from './list-keywords.component';

describe('ListKeywordsComponent', () => {
  let component: ListKeywordsComponent;
  let fixture: ComponentFixture<ListKeywordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKeywordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
