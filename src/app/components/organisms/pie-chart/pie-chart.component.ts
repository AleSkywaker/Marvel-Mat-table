import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { BarChartData } from 'src/app/services/marvel-data.interface';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  @Input() title: string = '';
  @Input() newData: BarChartData[] = [];
  isChartCreated: Boolean = false;
  private svg: any;
  private margin = 5;
  private width = 90;
  private height = 60;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: any;

  private createSvg(): void {
    this.svg = d3
      .select('div#pie')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.width / 2 + ',' + this.height / 2 + ')'
      );
  }
  constructor() {}
  ngOnInit(): void {}
  ngOnChanges(changes: any): void {
    if (!this.isChartCreated) {
      this.isChartCreated = true;
      return;
    }
    this.createSvg();
    this.createColors(changes['newData'].currentValue);
    this.drawChart(changes['newData'].currentValue);
  }

  private createColors(data: any): void {
    this.colors = d3
      .scaleOrdinal()
      .domain(data.map((d: any) => d.value.toString()))
      .range(['#c7d3ec', '#a5b8db', '#879cc4', '#677795', '#5a6782']);
  }

  private drawChart(data: any): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.value));
    // Build the pie chart
    this.svg
      .selectAll('pieces')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', d3.arc().innerRadius(0).outerRadius(this.radius))
      .attr('fill', (d: any, i: number) => this.colors(i))
      .attr('stroke', '#121926')
      .style('stroke-width', '1px');
    // Add labels
    const labelLocation = d3.arc().innerRadius(100).outerRadius(this.radius);
    this.svg
      .selectAll('pieces')
      .data(pie(data))
      .enter()
      .append('text')
      .text((d: any) => d.gender)
      .attr(
        'transform',
        (d: any) => 'translate(' + labelLocation.centroid(d) + ')'
      )
      .style('text-anchor', 'middle')
      .style('font-size', 4);
  }
}
