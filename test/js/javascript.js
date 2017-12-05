/*
*jquery test
*exercise 3
*Author: Dang Hoang Tho(danhoangtho1132@gmail.com)  
*/

var SLIDE_INDEX = 0;
var RETIMEOUT;
var IMG_WIN = $(".slider ul li");

$(document).ready(function () {
	slider();
});

//click left button to show previous img
$(".btn_left_js").click(function () {
	SLIDE_INDEX--;
	slider();
});

//click right button to show next img
$(".btn_right_js").click(function () {
	SLIDE_INDEX++;
	slider();
});

function slider () {	
    if(SLIDE_INDEX > IMG_WIN.length - 1) {
        SLIDE_INDEX = 0;
	} else if (SLIDE_INDEX < 0) {
        SLIDE_INDEX = IMG_WIN.length - 1;
	}
	IMG_WIN.hide();
	
	//fade in img in 1s then fade out in 3s
	IMG_WIN.eq(SLIDE_INDEX).fadeIn(1000, function () {
		IMG_WIN.fadeOut(3000);
	});
	clearTimeout(RETIMEOUT);
	RETIMEOUT = setTimeout(function () {
		SLIDE_INDEX++;
		slider();
	}, 3000);
}
 