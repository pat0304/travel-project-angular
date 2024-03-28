import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourHotCarouselComponent } from './tour-hot-carousel.component';

describe('TourHotCarouselComponent', () => {
  let component: TourHotCarouselComponent;
  let fixture: ComponentFixture<TourHotCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourHotCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourHotCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
