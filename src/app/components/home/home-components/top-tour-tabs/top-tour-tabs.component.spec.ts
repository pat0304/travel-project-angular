import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTourTabsComponent } from './top-tour-tabs.component';

describe('TopTourTabsComponent', () => {
  let component: TopTourTabsComponent;
  let fixture: ComponentFixture<TopTourTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopTourTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopTourTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
