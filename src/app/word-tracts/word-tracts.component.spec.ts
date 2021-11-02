import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordTractsComponent } from './word-tracts.component';

describe('WordTractsComponent', () => {
  let component: WordTractsComponent;
  let fixture: ComponentFixture<WordTractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordTractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordTractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
