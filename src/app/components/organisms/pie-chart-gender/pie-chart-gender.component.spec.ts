import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartGenderComponent } from './pie-chart-gender.component';

describe('PieChartGenderComponent', () => {
  let component: PieChartGenderComponent;
  let fixture: ComponentFixture<PieChartGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
