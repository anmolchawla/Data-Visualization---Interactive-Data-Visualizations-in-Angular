import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

import { STOCKS } from '../shared';

@Component({
    selector: 'app-line-chart',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

    title = 'Line Chart';

    private margin = {top: 20, right: 20, bottom: 30, left: 50};
    private width: number;
    private height: number;
    private x: any;
    private y: any;
    private svg: any;
    //private line: d3Shape.Line<[number, number]>;
    private years: any;
    private color: any;
    private xScale: any;
    private yScale: any;
    private country: any;
    private line : any;
    private legend: any;




    constructor() {
        console.log(STOCKS);
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
    }

    ngOnInit() {
        this.initSvg();
        this.drawLine();
    }

    private initSvg() {
        this.svg = d3.select('svg');
        this.years = ["1972","1977","1982","1987","1992","1997","2002","2007","2012","2017"];
        this.width = 800;
        this.height = 1000;
        this.color = d3.scaleOrdinal(d3.schemeCategory10);
        this.xScale = d3.scaleBand().domain(this.years).range([50,700]);
        this.yScale = d3.scaleLinear().domain([0, 100]).range([450, 0]); 
        this.country = this.svg.selectAll(".country").data(STOCKS).enter().append("g").attr("class", "countryLine");
        this.line = d3.line().y((d) => {return this.yScale(d.pop)+ 10;}).x((d) => {return this.xScale(d.year)+112;});
        //this.legend = this.svg.selectAll(".leg").data(STOCKS).enter().append("g")
    }


    private drawLine() {

        let svg = this.svg.append('g')
               .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');


            svg.append("g")
               .attr("transform", "translate(30," + 445 + ")")
               .call(d3.axisBottom(this.xScale));

              svg.append("g")
                 .attr("transform","translate(80," + -5 + ")")
                 .call(d3.axisLeft(this.yScale));

        let country = this.country.append("path")
                   .attr("class", "line")
                   .style("stroke", (d,i) => (this.color(i)))
                   .attr("fill", "none")
                   .attr("d", (d) => this.line(d.check));

        // let legend.append("circle")
        //           .attr("r",10)
        //           .style("fill", function(d,i) {return color(i);})
        //           .attr("x", -9)
        //           .attr("y",10)

        //     legend.append("text")
        //         .enter()
        //         .text(d.name)
        //         .attr("x",100)
        //         .attr("y",100);

    }

}
