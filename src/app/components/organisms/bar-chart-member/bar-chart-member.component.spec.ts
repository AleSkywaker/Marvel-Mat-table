import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartMemberComponent } from './bar-chart-member.component';

describe('BarChartMemberComponent', () => {
  let component: BarChartMemberComponent;
  let fixture: ComponentFixture<BarChartMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
