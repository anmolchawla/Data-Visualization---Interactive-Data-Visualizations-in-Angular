import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

import { POPULATION } from '../shared';

@Component({
    selector: 'app-pie-chart',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

    title = 'Pie Chart';

    private margin = {top: 0, right: 20, bottom: 30, left: 50};
    private width: number;
    private height: number;
    private radius: number;

    private arc: any;
    private labelArc: any;
    private pie: any;
    private color: any;
    private svg: any;
    private arcOver: any;
    private arcAfter: any;
    private types: any;

    constructor() {
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 700 - this.margin.top - this.margin.bottom;
        this.radius = Math.min(this.width, this.height) / 2;
    }

    ngOnInit() {
        this.initSvg();
        this.drawPie();
    }

    private initSvg() {


        this.color = d3Scale.scaleOrdinal()
            .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);

        this.arc = d3Shape.arc()
                          .outerRadius(this.radius - 20)
                          .innerRadius(0);
                        

        this.labelArc = d3Shape.arc()
            .outerRadius(this.radius - 40)
            .innerRadius(this.radius - 40);
        this.pie = d3Shape.pie()
            .sort(null)
            .value((d: any) => d.size);
        this.svg = d3.select('svg')
            .append('g')
            .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');

    }

    private drawPie() {
  

        function inside(data){
            console.log("IN");
            let types = data.data.name + " for the year of 2017 is at a percentage Rural Population of: " + data.data.size;
           
           
           document.getElementById("card_t").innerHTML = types;
            return d3.arc().outerRadius(325 + 10).innerRadius(0);
  

        }
        function outside(){
            console.log("OUT");
           document.getElementById("card_t").innerHTML = "Countries percentage population is being displayed on the chart above. Hover over each section to know more.";
             return d3.arc().outerRadius(325 - 10).innerRadius(0);

        }

        let g = this.svg.selectAll('.arc')
            .data(this.pie(POPULATION))
            .enter().append('g')
            .attr('class', 'arc');
            

       
        g.append('path').attr('d', this.arc)
            .style('fill', (d: any) => this.color(d.data.name) )
            .on("mouseover",function(d){
                d3.select(this)
                .transition()
                .duration(1000)
                .attr("d",  inside(d))
            })
            .on("mouseout", function(d) {

                d3.select(this)
                  .transition()
                  .duration(1000)
                  .attr("d", outside())
            });
       
        g.append('text').attr('transform', (d: any) => 'translate(' + this.labelArc.centroid(d)  + ')')
            .attr('dy', '.35em')
            .text((d: any) => d.data.name);
    }

}
