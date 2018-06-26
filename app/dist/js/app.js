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
$(window).scroll(function(){
});