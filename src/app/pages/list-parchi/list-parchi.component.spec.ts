import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParchiComponent } from './list-parchi.component';

describe('ListParchiComponent', () => {
  let component: ListParchiComponent;
  let fixture: ComponentFixture<ListParchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListParchiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
