$(document).ready(function(){

	$('.about__toggle').click(function(event){
		event.preventDefault();
		console.log('click');

	$('.about-content__box').hide();
	 var href = $(this).attr('href');

	 $(href).show();		
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 1280) {
			$('#scrollToTop').fadeIn();
		}
		else{
			$('#scrollToTop').fadeOut();
		}
});
	
	$('#scrollToTop').click(function(event){
		event.preventDefault();
		$('html').animate({scrollTop: 0}, 800)
	});		


});

