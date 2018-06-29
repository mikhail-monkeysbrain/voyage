$('.parallax').mousemove(function(e){
    var 
    	X = e.pageX;
    $('.parallax--l-1').css({
    	'margin-left'	: -(X/100).toFixed(),
    	'margin-top'	: -(X/100).toFixed(),
    });
    $('.parallax--l-2').css({
    	'margin-left'	: -(X/20).toFixed(),
    	'margin-bottom'	: -(X/120).toFixed(),
    });
    $('.parallax--l-3').css('margin-left', -(X/150).toFixed());


});
$(function(){
    navPos = $('.nav').offset().top;
    console.log(navPos);

	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if(scroll>navPos){
			$('.nav').addClass('fixed');
		}
		else{
			$('.nav').removeClass('fixed');
		}
	});
})

function calc(content, color) {
	console.log(content, color);
  }