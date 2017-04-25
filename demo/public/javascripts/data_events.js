
var nodes = [];
var limit = 15;
var width = 800;
var height = 250;
var index = 0;
var tickTime = 1000;
var transitionTime = tickTime;

function generateColor(){return d3.schemeCategory20[Math.floor(Math.random() * 10)]};
function generateHeight(){return Math.floor(25 + (Math.random() * (height - 75)))};
function generateRadius(){return Math.floor(Math.random() * 10 + 10)};

function generateCircle(){
    index++;
    return {i:index, r: generateRadius(), color: generateColor(), height: generateHeight()};
}

function tick(){
    var circle = generateCircle();
    nodes.push(circle); 
    if(nodes.length > limit){
        nodes.shift();
    }
    bindData();
}

var svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);


function bindData(){
    var min = d3.min(nodes,function(d){ return d.i});
    var max = d3.max(nodes, function(d){ return d.i});
    console.log("min domain" + min);
    console.log("max domain" + max);
    
    var xScale = d3.scaleLinear()
                .domain([min, max])
                .range([75, width - 75]);

    // data bind
    var circles = svg.selectAll("circle").data(nodes, function(d){return d.i});

    // update
    circles
        .transition()
        .duration(transitionTime)
        .attr("cx", function(d){ return xScale(d.i)});

    // new element comes onto the stage    
    circles.enter()
            .append("circle")
            .style("opacity",0)
            .attr("r", function(d) { return d.r; })
            .attr("cx", function(d){ return width + 20})
            .attr("cy", function(d){ return height - d.height })
            .attr("fill", function(d) { return d.color; })
            .transition()
            .duration(transitionTime)
            .attr("cx", function(d){ return xScale(d.i)})
            .style("opacity",100);

    // element leaves the stage
    circles.exit()
           .transition()
           .duration(transitionTime)
           .attr("cx", function(d){ return -20})
           .style("opacity",0)
           .remove();
}

setInterval(tick, tickTime);