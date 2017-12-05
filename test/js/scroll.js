/*
*jquery test
*exercises 8: button scroll Top
*Author: Dang Hoang Tho(danhoangtho1132@gmail.com)
*/

$(document).ready(function() {
	var btnTop = $('#btnTop');
	btnTop.hide();
	
	//if user still not scroll page, hide button, if scroll, show button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
            btnTop.fadeIn();
		} else btnTop.fadeOut();
	});

	//smooth scroll
    btnTop.click(function () {
    	$('html,body').animate({
    		scrollTop: 0
    	}, 800);
    	return false;
    });
});
