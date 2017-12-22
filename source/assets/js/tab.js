/*
*tab
*Author: Dang Hoang Tho(danhoangtho1132@gmail.com)
*/

/*===========variable============*/
var TAB = $(".list-tab-js li");
var DIV = $(".tab");

/*===========function============*/
$(document).ready(function () {
	for (i = 0; i < TAB.length; i++) {
        if(TAB.eq(i).hasClass("active")) {
            DIV.eq(i).fadeIn();        
        } else DIV.eq(i).hide();
	}
});

TAB.click(function () {
	var item = TAB.index(this);
    var i = 0;
	for (i = 0; i < TAB.length; i++) {
        TAB.eq(i).removeClass("active");
        DIV.eq(i).hide();
	}
	TAB.eq(item).addClass("active");
	DIV.eq(item).fadeIn();
});
