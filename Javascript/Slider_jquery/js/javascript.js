/*
*Slider write by JQUERY
*Idea: show each image after the specify time, and action choose any img in menu 
 option, then it'll show  a choosed img.
*@author: danghoangtho1132@gmail.com
*/
var SLIDE_INDEX = 0;
var RETIMEOUT;
var IMG_WINDOW = $(".sl-main-image-js img");
var IMG_MENU = $(".sl-row-padding img");

/*
*ACTION: run action show image;
*/
$(document).ready(function () {
	showImage();
});

/*
*action:show imge every 4s
*/
function showImage() {
	if (SLIDE_INDEX > 3) {
		SLIDE_INDEX = 0;
	} else if(SLIDE_INDEX < 0) {
		SLIDE_INDEX = 0;
	}
	IMG_WINDOW.hide(); // hide all tag div consist image ==> hide img
	IMG_WINDOW.eq(SLIDE_INDEX).show(); //show current image in list img
	currentImage(); //show current image at menu
	clearTimeout(RETIMEOUT);
	RETIMEOUT = setTimeout(function () {
	  SLIDE_INDEX++; 
	  showImage();
	}, 4000);
}

//action: show image menu, when a main img show, the same image will show at menu img.
function currentImage() {
	IMG_MENU.removeClass("sl-opacity-off");
	IMG_MENU.eq(SLIDE_INDEX).addClass("sl-opacity-off");
	console.log(SLIDE_INDEX);
} 

/*
*Action: click prev image
*/
$("#btn_left_js").bind("click", btnPrev);
function btnPrev() {
	SLIDE_INDEX--;
	showImage();
}

/*
*Action: click next image
*/
$("#btn_right_js").bind("click", btnNext);
function btnNext() {
	SLIDE_INDEX++;
	showImage();
}

/*
Action: click any image in menu, it will show the same imge on program. 
*/
$(".sl-row-padding img").bind("click", function() {
	SLIDE_INDEX = IMG_MENU.index(this); //get position of choosed image in array image
	showImage();
});