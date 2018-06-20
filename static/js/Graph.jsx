import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';
import React from "react";

var svg = d3.select("body");
svg.append("div").html("First heading using d3 and React.")
    .style("font-size","22px")
    .style("color","green");
 
svg.append("circle")
   .attr("r", 40)
   .attr("cx", 50)
   .attr("cy", 50)
   .attr("fill", "blue");
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
      drawChart() {
        //const div = new ReactFauxDOM.createElement('div');
        var node = ReactFauxDOM.createElement('svg');
        // ... 
        //return div.toReact()
        return node.toReact();
      }
     
      render () {
        return (<svg>
        <svg height="100" width="100">
        {this.drawChart()}
        <circle cx="50" cy="50" r="40" fill="yellow" />
      </svg> </svg>);

      }
    }
