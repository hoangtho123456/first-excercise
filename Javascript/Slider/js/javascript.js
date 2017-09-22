var slideIndex = 0;
var reTimeout;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n - 1);
}

function showDivs(n) {
	var i;
	var slide = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if(n >= slide.length) { slideIndex = 0; }
	if (n < 0) { slideIndex = slide.length-1; }
	for (i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
	//dots
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" sl-opacity-off", "");
	}
	slide[slideIndex].style.display = "block";
	dots[slideIndex].className += " sl-opacity-off";
	//use clearTimeout to reset the time of the slide is running.
	clearTimeout(reTimeout);
	reTimeout = setTimeout(function () { showDivs(slideIndex += 1); }, 5000);
}