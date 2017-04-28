
var w = 600,
    h = 600;

var numNodes = 50;

var nodes = d3.range(numNodes).map(function() { return {radius: Math.random() * 12 + 4}; }),
    color = function(i){return d3.schemeCategory20[i]};

var svg = d3.select("#simulation")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

var sim = d3.forceSimulation()
            .nodes(nodes);

sim.force("gravity", d3.forceManyBody().strength(function(d, i) { return 10; }))
   .force("collide",d3.forceCollide( function(d){return d.radius + 1 }).iterations(20) )
   .force("center_force", d3.forceCenter(w / 2, h / 2));

sim.alphaDecay(0);

var circles = svg.append("g")
                 .selectAll("circle")
                 .data(nodes)
                 .enter()
                 .append("circle")
                 .attr("r", function(d) { return d.radius - 2; })
                 .attr("fill", function(d, i) { return color(i % 7); });

var tick = function() {
    circles.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
}

sim.on("tick", tick );

var drag_handler = d3.drag()
    .on("drag", function(d) {
          d3.select(this)
            .attr("cx", d.x = d3.event.x  )
            .attr("cy", d.y = d3.event.y  );
        });
        
drag_handler(circles);