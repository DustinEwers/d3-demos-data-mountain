/* Line Chart */

    /* 
    Sample data: 
        Date,Value
        2013-12-31,766.62
        2012-12-31,880.9
        2011-12-31,946.32
    */

d3.csv("/data/world_poverty_in_millions.csv", function(data){
    // Setup Data
    var vals = data.map(function(d){ return {x:Number.parseInt(d.Date.substr(0,4)), y:Number.parseFloat(d.Value)}});
    vals.sort(function(a,b){return a.x - b.x});
    var lineData = [
        {
            values: vals,
            key: "Poverty Level (millions)",
            color:'#ff7f0e'
        }
    ]

    // Build the chart
    nv.addGraph(function() {
        var lineChart = nv.models.lineChart()
                .margin({left: 100})
                .useInteractiveGuideline(true)
                .showYAxis(true)
                .showXAxis(true);

        lineChart.xAxis     //Chart x-axis settings
            .axisLabel('Year');
            //.tickFormat(d3.time.format("%Y"));

        lineChart.yAxis     //Chart y-axis settings
            .axisLabel('Poverty Level (in millions)')
            .tickFormat(d3.format('.02f'));

        d3.select('#lineDemo')    //Select the <svg> element you want to render the chart in.   
            .datum(lineData)         //Populate the <svg> element with chart data...
            .call(lineChart);          //Finally, render the chart!

        nv.utils.windowResize(function() { lineChart.update() });
        return lineChart;
    });
});

/* Area Chart */
d3.csv("/data/world_poverty_in_millions.csv", function(data){
    // Setup Data
    var vals = data.map(function(d){ return {x:Number.parseInt(d.Date.substr(0,4)), y:Number.parseFloat(d.Value)}});
    vals.sort(function(a,b){return a.x - b.x});
    var lineData = [
        {
            values: vals,
            key: "Poverty Level (millions)",
            color:'#ff7f0e',
            area: true
        }
    ]

    // Build the chart
    nv.addGraph(function() {
        var lineChart = nv.models.lineChart()
                .margin({left: 100})
                .useInteractiveGuideline(true)
                .showYAxis(true)        //Show the y-axis
                .showXAxis(true)        //Show the x-axis
                .forceY([0, d3.max(vals, function(d){return d.y})]);

        lineChart.xAxis //Chart x-axis settings
            .axisLabel('Year'); //.tickFormat(d3.time.format("%Y"));

        lineChart.yAxis     //Chart y-axis settings
            .axisLabel('Poverty Level (in millions)')
            .tickFormat(d3.format('.02f'));

        d3.select('#areaDemo')  //Select the <svg> element you want to render the chart in.   
            .datum(lineData)    //Populate the <svg> element with chart data...
            .call(lineChart);   //Finally, render the chart!

        nv.utils.windowResize(function() { lineChart.update() });
        return lineChart;
    });
});


/* Pie Chart */

nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true);

    d3.select("#pieDemo")
        .datum(exampleData())
        .transition().duration(350)
        .call(chart);

  return chart;
});

//Pie chart example data. Note how there is only a single array of key-value pairs.
function exampleData() {
  return  [
     { 
        "label": "okay",
        "value" : 10
      } , 
      { 
        "label": "probably a bad idea",
        "value" : 20
      } , 
      { 
        "label": "definitly a bad idea",
        "value" : 70
      }
    ];
}
