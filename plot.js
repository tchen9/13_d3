var svg = document.getElementById("s");
var height = [];
var shoesize = [];

var scatterplot = function(){
    var container = d3.select("svg");
    var circles = container.selectAll("circle").data(height).enter();
}
