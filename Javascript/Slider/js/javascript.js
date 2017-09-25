/**
*Create the animation for lides in HTML
*@author danghoangtho1132@gmail.com (Đặng Hoàng Thọ)
*/
var slideIndex = 0; //@slideIndex is a value it increase or decrease follow the change of slides
var reTimeout; //@reTimeout is a value will reset time of a slide if you pick another slides
showDivs(slideIndex); //function show slide animation.

/**
*when you click button ">" or "<":
*@value slideIndex will increase (or decrease), 
  the current slide move the next (or move the before slide).
*/
function plusDivs(n) {
	showDivs(slideIndex += n);
}
//Show the slide is corresponding to the selected bar shape
function currentDiv(n) {
	showDivs(slideIndex = n - 1);
}
//show slide animation
function showDivs(n) {
	var i;
	var slide = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if(n >= slide.length) { slideIndex = 0; }
	if (n < 0) { slideIndex = slide.length-1; }
	for (i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
	//dots is the img bar to choose the img
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" sl-opacity-off", "");
	}
	slide[slideIndex].style.display = "block";
	dots[slideIndex].className += " sl-opacity-off"; 
	//use clearTimeout to reset the time of the slide is running.
	clearTimeout(reTimeout);
	reTimeout = setTimeout(function () { showDivs(slideIndex += 1); }, 5000);
}