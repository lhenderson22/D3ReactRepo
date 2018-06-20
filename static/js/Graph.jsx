import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';
import React from "react";

//var svg = d3.select("body");
//svg.append("div").html("First heading using d3 and React.")
//    .style("font-size","22px")
//    .style("color","green");
 
//svg.append("circle")
//.attr("cx", 50)
//   .attr("cy", 50)
//   .attr("r", 40)
//   .attr("fill", "blue");
//  .on("mouseover", function() {
//        var myCircle = this;
//        d3.select(myCircle).style("fill","red");
//   })
//   .on("mouseout", function() {
//        var myCircle = this;
 //       d3.select(myCircle).style("fill","green");
 //});




export default class Graph extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        //d3.csv("/static/data.csv", function(data) {
        //    console.log(data[0]);
            
        //});

            var margin = {top: 20, right: 20, bottom: 30, left: 40},
          width = 600 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;
     
        var x = d3.scaleBand()
          .rangeRound([0, width])
     
        var y = d3.scaleLinear()
          .range([height, 0])
     
        var xAxis = d3.axisBottom()
          .scale(x)
     
        var yAxis = d3.axisLeft()
          .scale(y)
          .ticks(10, "%");
     
        //Create the element
        const div = new ReactFauxDOM.Element('div')
         
        //Pass it to d3.select and proceed as normal
        var svg = d3.select(div).append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);
     
          //x.domain(data.map((d) => d.letter));
          //y.domain([0, d3.max(data, (d) => d.frequency)]);
     
        svg.append("g")
          .attr("class", "x axis")
          .attr("transform", `translate(0,${height})`)
          .call(xAxis);
     
        svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Frequency");
     
        svg.selectAll(".bar")
          //.data(data)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("x", (d) => x(d.letter))
          .attr("width", 20)
          .attr("y", (d) => y(d.frequency))
          .attr("height", (d) => {return height - y(d.frequency)});
          
        
        return div.toReact();
        
    }
}

