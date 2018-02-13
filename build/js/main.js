$(document).ready(function(){

	
	$(window).scroll(function() {

		var wScroll = $(this).scrollTop();

		$('.author').css({
			'transform' : 'translate(0%, -' + (50 + wScroll / 10) + '%)'
		});

	});


});
