import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordMenuComponent } from './accord-menu.component';

describe('AccordMenuComponent', () => {
  let component: AccordMenuComponent;
  let fixture: ComponentFixture<AccordMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
