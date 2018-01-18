/*
*jquery test
*exercises 4: divTab JS
*exercises 6: Q&A
*Author: Dang Hoang Tho(danhoangtho1132@gmail.com)
*/

//variable exercises 4
var TAB = $(".tabContain li");
var DIV = $(".container .inner div");
var DIV1 = $(".infoTab1");
var DIV2 = $(".infoTab2");
var DIV3 = $(".infoTab3");

//variable exercises 6
var ANS = $(".infoTab2 .listQA dd");
var QUEST = $(".infoTab2 .listQA dt");

//when onload, hide tab2 and tab3, show tab1
$(document).ready(function () {
	$(".tabContain li:first-child").addClass("active");
	DIV1.show();
	DIV2.hide();
    DIV2.hide();
});

//click tab, will show corresponding tab, and hide tab did not click
$(TAB).click(function () {
	var item = TAB.index(this);  //get position clicked tab

	//hide all tabs and answer in tab2
	for (var i =0; i < TAB.length; i++) {
        TAB.eq(i).removeClass("active");
        DIV.eq(i).hide();
        ANS.hide();
	}
	TAB.eq(item).addClass("active");
	DIV.eq(item).fadeIn();
});

//click a questtion in tab 2, show corresponding answer
$(QUEST).click(function () {
    var item = QUEST.index(this);
    ANS.eq(item).fadeToggle(1000);	
});
