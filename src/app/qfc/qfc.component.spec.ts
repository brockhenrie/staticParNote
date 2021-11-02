import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QfcComponent } from './qfc.component';

describe('QfcComponent', () => {
  let component: QfcComponent;
  let fixture: ComponentFixture<QfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QfcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
