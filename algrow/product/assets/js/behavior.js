/*
*type: file javascript
*author: Dang Hoang Tho
*email: danghoangtho1994@gmail.com 
*/
/*==============================================
	Scroll
==============================================*/
$(function() {
    $("#page_top").click(function() {
        var speed = 500;
        var position = $("html, body").offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});
