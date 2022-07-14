import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { BarChartData } from 'src/app/services/marvel-data.interface';

@Component({
  selector: 'app-bar-chart-skills',
  templateUrl: './bar-chart-skills.component.html',
  styleUrls: ['./bar-chart-skills.component.css'],
})
export class BarChartSkillsComponent implements OnInit {
  @Input() title: string = '';
  @Input() data: BarChartData[] = [];
  isChartCreated: Boolean = false;
  private svg: any;
  private margin = 5;
  private width = 90 - this.margin;
  private height = 40 - this.margin;
  constructor() {}
  ngOnInit(): void {  }

  ngOnChanges(changes: any): void {
    if (!this.isChartCreated) {
      this.isChartCreated = true;
      return;
    }
    this.createSvg();
    this.drawBars(changes['data']?.currentValue);
  }

  private createSvg(): void {
    this.svg = d3
      .select('figure#bar')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 10)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(data.map((d) => d.name))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const y = d3.scaleLinear().domain([0, 5]).range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g').call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d: any) => x(d.name))
      .attr('y', (d: any) => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', (d: any) => this.height - y(d.value))
      .attr('fill', '#d04a35');
  }
}
