import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCarousselComponent } from './slide-caroussel.component';

describe('SlideCarousselComponent', () => {
  let component: SlideCarousselComponent;
  let fixture: ComponentFixture<SlideCarousselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideCarousselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
