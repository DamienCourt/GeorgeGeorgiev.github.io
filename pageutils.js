    function fixHeaderMargin() {
        var header = document.getElementById('main_header');
        var main = document.getElementsByTagName('main')[0];
        var margin = window.getComputedStyle(header).getPropertyValue('height');
        main.style.marginTop = margin;
    }

	////show and hide navigation menu
	$('#menu').on('click', function() {
  		$('.nav-container').toggle('slow');
	})
	$('.nav-container a').on('click', function() {
  		$(".nav-container").toggle('slow');
	})

	// show and hide login menu
	$(document).mouseup(function(e){
		var container = $('#login_holder');
		if (!container.is(e.target) && container.has(e.target).length === 0) 
    	{
        	container.hide();
    	}
	})
	$('#log_in').on('click', function() {
    var dh = $('#login_holder').outerHeight();
    console.log($(window).scrollTop() - dh);
    // todo: drop from current viewport; get height
    $('#login_holder').css({
            top: $(window).scrollTop() - dh,
            opacity: 0,
            display: 'block'
        }).animate({
            top: 50,
            opacity: 1
        }, 1000,'swing');

     $('#username').focus();
});

