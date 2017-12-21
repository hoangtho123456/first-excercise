/*
*pop up calendar
*Author: Dang Hoang Tho(danhoangtho1132@gmail.com)
*/
var POPUP = $('#popup');
var LABEL = $('#label-calen');
var CLOSE = $('#close');

LABEL.click(function () {
	POPUP.fadeIn();
});
CLOSE.click(function () {
	POPUP.fadeOut();
});
