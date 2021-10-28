import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParTemplateComponent } from './par-template.component';

describe('ParTemplateComponent', () => {
  let component: ParTemplateComponent;
  let fixture: ComponentFixture<ParTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
