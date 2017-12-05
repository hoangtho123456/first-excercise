/*
*jquery test
*exercise 5: popup js
*exercise 1: animate scroll top
*Author: Dang Hoang Tho(danhoangtho1132@gmail.com)
*/

/*===============exercise 5==================*/
var ITEM = $("ul.listItem li a");
var POPUP = $("#popup"); 
var POPUP_CONTENT = $("#popup div.popup_content"); //content in popup
var CLOSE = $("#btn_close");

//search position of item was clicked, show popup which has corresponding value with item just clicked
$(ITEM).click(function() {
    //get current Position of item which was clicked in list item
	var item = ITEM.index(this);
    //get children tags in current <a>
    var titleItem = ITEM.eq(item).children("p.nameItem"); 
    var infoItem = ITEM.eq(item).children("p.infoItem");
    var imgItem = ITEM.eq(item).children("img");
    //get children tags in popup
	var titlePop = POPUP_CONTENT.children("p.nameItem");
	var infoPop = POPUP_CONTENT.children("p.infoItem");
	var imgPop = POPUP_CONTENT.children("img");
    
    POPUP.fadeIn();
    //assign values of each child tags in tag <a> into corresponding popup's tags
    POPUP_CONTENT.children("p").html(ITEM.eq(item).children("p").html());
    titlePop.html(titleItem.html());
    infoPop.html(infoItem.html());
    imgPop.attr("src", imgItem.attr("src"));
});

//when click button "close" in popup, close popup
$(CLOSE).click(function (){
	POPUP.fadeOut();
});

/*===============exercise 1==================*/
var MENU = $(".divMenu .supMenu li");
$(document).ready(function () {
    animateLoop();
    /*$(MENU).hover(function () {
    	var item = MENU.index(this);
     	var ulMenu = MENU.eq(item).children("ul.menu");
     	if(ulMenu) {
     		ulMenu.css("display","block");
     	}
    }, function() {
    	var item = MENU.index(this);
     	var ulMenu = MENU.eq(item).children("ul.menu");
     	if(ulMenu) {
     		ulMenu.css("display","none");
     	}
    });*/
});

$(".divMenu .supMenu li ul").hover(function() {
    //$(this).children("ul.menu").stop(true, false, true).slideToggle(300);
});

//animate horizontal scroll text top from right to left
function animateLoop() {
	$(".messText p").css("right", 0);
	$(".messText p").animate({
		right: "+=250px",
		width: "100%"
	}, 3000,"linear", function () {
		animateLoop();
	});
}
