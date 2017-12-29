/*
*js use for layout detail.html, visiting-list.html, detail-list.html
*Author: Dang Hoang Tho(danhoangtho1132@gmail.com)
*/

var LI_CHILD = $('.list-hira li ul li'); //li cover radio-button, use for set bg-color
var ROW = $('.visiting-list tr'); //row list in layout visiting-list.html
var LIST_RADIO = $('.list-radio li'); 

/*====variable of checkbox and radio box=====*/
var CHECKBOX_BG = $('.check-box');
var RADIO_BTN = $(".list-radio li input[type='radio']");
var CHECKBOX = $(".check-box input[type='checkbox']");

$(document).ready(function () {
  SetActive();
});

/*
*Set active checkbox and radio-box
*/
function SetActive() {
  for (var i = 0; i < LIST_RADIO.length; i++) {
    if(LIST_RADIO.eq(i).hasClass("active")) {
      LIST_RADIO.eq(i).children('input').prop("checked", true);          
    }
  }
  if(CHECKBOX_BG.hasClass("active")) {
  	CHECKBOX_BG.children('input').prop("checked", true);
  }
}

//=====Event Handler=====

/*
*click radio-btn, set color of it's back-ground is blue
*/
$(RADIO_BTN).on('click', function () {
  var curRa = $(RADIO_BTN).index(this);
  
  for (var i = 0; i < LIST_RADIO.length; i++) {
    LIST_RADIO.eq(i).removeClass("active");
  }
  RADIO_BTN.eq(curRa).parent('li').addClass("active");
});

/*
*click Checkbox, set color of it's back-ground is blue
*/
$(CHECKBOX).on('click', function () {
  var curBox = CHECKBOX.index(this);
    if(!CHECKBOX.eq(curBox).prop('checked')) {
  	  CHECKBOX.eq(curBox).parent('.check-box').removeClass("active");
    } else CHECKBOX.eq(curBox).parent('.check-box').addClass("active");

});

/*
*click any btn in detail-list, it will link to visiting-list.html
*/
$(LI_CHILD).bind('click', function() {
  window.open('visiting-list.html', '_self');
});

/*
*click any row in visiting-list, it will store data, and return to detail.html.
*/
$(ROW).on('click', function () {
  if(navigator.cookieEnabled) {
    setCookie('name',$(this).children('td').eq(2).text(),-1);
    window.open('detail.html#tab1', '_self');
  } else {alert("please start cookie to get data!");}
});
