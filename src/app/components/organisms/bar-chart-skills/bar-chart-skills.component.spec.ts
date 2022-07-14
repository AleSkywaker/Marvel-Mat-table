import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartSkillsComponent } from './bar-chart-skills.component';

describe('BarChartSkillsComponent', () => {
  let component: BarChartSkillsComponent;
  let fixture: ComponentFixture<BarChartSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
