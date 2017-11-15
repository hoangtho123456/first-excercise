/*
*Pie donut char
*design pattern: Module design pattern
*Idea: draw pie donut chart in canvas, show percent value of each part following exercise 
*@author: danghoangtho1132@gmail.com
*/
var charData = {
  "Xuất sắc" : 10,
  "Tốt" : 20,
  "Trung bình" : 10,
  "Kém" : 60
};

var options = {
	canvas : canvas_char,
	description : description,
	data : charData,
	colors : ["blue","red","yellow","green"],
	donutHoleSize : 0.5
};

var chart = (function () {
	var options = options.canvas;
	canvas.width = 400;
	canvas.height = 400;
	var canvas = optionCanvas.getContext("2d");
	var data = options.data;
	var colors = options.colors;
	var description = options.description;
	var centerCircle = Math.min(canvas.width/2, canvas.height/2);
	  
});