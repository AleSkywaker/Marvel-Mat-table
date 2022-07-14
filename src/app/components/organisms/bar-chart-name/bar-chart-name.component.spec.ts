import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartNameComponent } from './bar-chart-name.component';

describe('BarChartNameComponent', () => {
  let component: BarChartNameComponent;
  let fixture: ComponentFixture<BarChartNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
