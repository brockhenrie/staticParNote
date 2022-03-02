import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordContentDisplayComponent } from './accord-content-display.component';

describe('AccordContentDisplayComponent', () => {
  let component: AccordContentDisplayComponent;
  let fixture: ComponentFixture<AccordContentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordContentDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordContentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
