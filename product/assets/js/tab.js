/*
*tab
*Author: Dang Hoang Tho(danhoangtho1132@gmail.com)
*/

/*===========variable============*/
var TAB = $(".list-tab-js li");
var DIV = $(".tab-js");

//buttton copy will show corresponding with tab record
var COPY_BTN = document.getElementById("copy_btn");

/*
*set tab record will be showed when page loads, and button green of it will show
*/
$(document).ready(function () {
	var i = 0;
	COPY_BTN.style.visibility = 'hidden';

	for (i = 0; i < TAB.length; i++) {
    if(TAB.eq(i).hasClass("active")) {
        DIV.eq(i).fadeIn();
        if(TAB.eq(i).index() === 0) {
          COPY_BTN.style.visibility = 'visible';
        }        
    } else {
      DIV.eq(i).hide();
    } 
	}
});

TAB.click(function () {
	var item = TAB.index(this);
  var i = 0;

	for (i = 0; i < TAB.length; i++) {
        TAB.eq(i).removeClass("active");
        DIV.eq(i).hide();
        //hide btn green
        COPY_BTN.style.visibility = 'hidden';
	}
	TAB.eq(item).addClass("active");
	DIV.eq(item).fadeIn();

	if(TAB.eq(item).index() === 0) {
      COPY_BTN.style.visibility = 'visible';
	}
});
