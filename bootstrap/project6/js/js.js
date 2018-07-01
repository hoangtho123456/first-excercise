( function() { 
	console.log($('body').offset().top);
	
	$(".top1 .btn.btn-default").click(function() {
		$("html, body").animate({ scrollTop: 0 });
		return false;
	});

	$(".n1").click(function() {
		$("html, body").animate({ scrollTop: $('.top1').offset().top });
		$('.right-menu').removeClass('out');
		return false;
	});

	$(".n2").click(function() {
		$("html, body").animate({ scrollTop: $('.top2').offset().top });
		$('.right-menu').removeClass('out');
		return false;
	});

	$(".n3").click(function() {
		$("html, body").animate({ scrollTop: $('.top3').offset().top });
		$('.right-menu').removeClass('out');
		return false;
	});

	$(".n4").click(function() {
		$("html, body").animate({ scrollTop: $('.top4').offset().top });
		$('.right-menu').removeClass('out');
		return false;
	});	

	$(".n5").click(function() {
		$("html, body").animate({ scrollTop: $('footer').offset().top });
		$('.right-menu').removeClass('out');
		return false;
	});	

	console.log($(window).height());
	console.log('hello');

	$(window).resize(function () {
		var height = $(window).height();
		$('.top1').css({
			'height': height
		});
	});

	//when click to btn top, show menu
	$('.btn-top').click(function() {
		$('.right-menu').addClass('out');
		return false; //use for prevent the event in a tag
	});

	$('.off').click(function() {
		$('.right-menu').removeClass('out');
		return false; //use for prevent the event in a tag
	});
})();
