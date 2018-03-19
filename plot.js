var svg = document.getElementById("s");
var info = [ [5, 60], [5, 62], [6, 63], [7, 65], [7, 67], [9, 69], [10, 70]];

var scatterplot = function(){
    var container = d3.select("svg");
    var circles = container.selectAll("circle").data(info).enter();
    circles.append("circle")
	.attr("cx", function(d) {return d[0] * 50})
	.attr("cy", function(d) {return (d[1]/100)*(-400)+450})
	.attr("r", 5)
	.attr("fill", "lightsteelblue");
    svg.append(circles);
}

scatterplot();
