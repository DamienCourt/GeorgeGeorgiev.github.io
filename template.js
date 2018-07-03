$(document).ready(function(){
	$('#main_content').load('home.html');
});

$('.nav-list a').click(function(){
	var page = $(this).attr('data');
	$('#main_content').load(page);

	//ignores the href in html
	return false;
})