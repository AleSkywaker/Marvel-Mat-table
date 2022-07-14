import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartOccupationComponent } from './bar-chart-occupation.component';

describe('BarChartOccupationComponent', () => {
  let component: BarChartOccupationComponent;
  let fixture: ComponentFixture<BarChartOccupationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartOccupationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
