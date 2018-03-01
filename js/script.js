$(function() {
	// toggle-menu
	$(".nav-toggle, .nav-close").click(function(e) {
		e.preventDefault();
		$(".nav").toggleClass("active");
	});

});