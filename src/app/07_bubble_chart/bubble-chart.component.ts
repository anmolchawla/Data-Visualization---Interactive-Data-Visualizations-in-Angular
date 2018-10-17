import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

import { TEMPERATURES } from '../shared';

@Component({
    selector: 'app-bubble-chart',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './bubble-chart.component.html',
    styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {
    
    title = 'Bubble Chart';

    private width: number;
    private height: number;
    private svg: any;     
    private diameter: any;
    private arc: any;
    private pie: any;
    private color: any;
    private nodes: any;
    private node: any;
    private g: any;
    private tooltip: any;
    private bubble: any;

    constructor() {console.log(TEMPERATURES);}

    ngOnInit() {
        this.initSvg();
        this.drawChart(TEMPERATURES);
    }

    private initSvg() {
        this.diameter = 600;
        this.color = d3Scale.scaleOrdinal().range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf","#C6DBEF"]);
        this.bubble = d3.pack(TEMPERATURES).size([600,600]).padding(1.5);
        this.svg = d3.select('svg');
        this.width = +this.svg.attr('width');
        this.height = +this.svg.attr('height');
        this.nodes = d3.hierarchy(TEMPERATURES[0]).sum(function(d) { 
            return d.size; });
    }

    private drawChart(data: any[]) { 

    let node = this.svg.selectAll(".node").data(this.bubble(this.nodes).descendants()).enter().append("g").attr("class", "node")
                      .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")";});
    let tooltip = this.svg.append("g").attr("class","tooltip").style("display","none");


    let _self = this;
    
    node.append("circle")
            .attr("r", function(d) {

                return d.r;
            })
            .style("fill", function(d,i) {
                
                return _self.color(i);
            })
            .on("mouseover",function(d){
              tooltip.style("display",null);
            })
            .on("mouseout",function(d){
              tooltip.style("display","none");
            })
            .on("mousemove",function(d){
              var xpos = d3.mouse(this)[0];
              var ypos = d3.mouse(this)[1]+350;
              tooltip.attr("transform","translate(" + xpos + "," + ypos + ")");
              if(d.height != 1){
              tooltip.select("text").text("%Rurual Pop: " + d.data.size);}
              else{
                tooltip.style("display","none")
              }

            });

    node.append("text")
        .filter(function(d){return  !d.children})
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .text(function(d) {return d.data.name;});

    d3.select(self.frameElement)
      .style("height", this.diameter + "px");
  }
}