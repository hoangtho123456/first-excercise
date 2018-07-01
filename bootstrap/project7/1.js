 $(function(){
 	$(window).scroll(function() {
 		//alert('you just scrolled');
 		//current position
 		currpo = $('html, body').scrollTop();
 		//console.log(currpo);

 		if(currpo > 574) {
 			$(".navber-fixed-top").addClass('good');
 			//$(".navber-fixed=top").addClass('good');
 		}
 	});
})  
	 
     