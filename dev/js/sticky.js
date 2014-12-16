var offsetY 	= $('.sticky').offset().top;
var target		= '.sticky';
var stickyClass = 'scrolled';

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > offsetY) {
    	$(target).addClass('scrolled');
    	$(target).parent().addClass('sticky-fix');
    } else {
        $(target).removeClass('scrolled');
        $(target).parent().removeClass('sticky-fix');
    }
});