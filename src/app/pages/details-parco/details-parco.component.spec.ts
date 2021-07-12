import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsParcoComponent } from './details-parco.component';

describe('DetailsParcoComponent', () => {
  let component: DetailsParcoComponent;
  let fixture: ComponentFixture<DetailsParcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsParcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsParcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
