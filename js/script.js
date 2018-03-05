$(function() {
	// toggle-menu
	$('.nav-toggle, .nav-close').click(function(e) {
		e.preventDefault();
		$('.nav').toggleClass('active');
	});

	//header fixed
	$(window).scroll(function(){
		if($(this).scrollTop() > 100) {
			$('.header').addClass('fixed');
		} else {
			$('.header').removeClass('fixed');
		}
	});
});