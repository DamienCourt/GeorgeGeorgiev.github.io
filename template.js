//for test purposes
var request = new XMLHttpRequest();
request.open('GET','https://santiagovedra.github.io/GeorgeGeorgiev.github.io/dogs.json');

request.onload = function(){
	var data = JSON.parse(request.responseText);
	createGallery(data);
};


//Load Template content
$(document).ready(function(){
	$('#main_content').load('home.html');
});

$('.nav-list a').click(function(){
	var page = $(this).attr('data');
	$('#main_content').load(page);
		if(page =='profiles.html'){
			request.send();
		}

	//ignores the href in html
	return false;
})

function createGallery(data){
	var target = document.getElementById('gallery_container');
	var output = '';
	for(i = 0; i < data.length; i++){
		output+='<figure class="tilt1"><img src="'+data[i].photo+'"/><figcaption>'+data[i].name+'</figcaption></figure>';
	}
	target.innerHTML = output;
	console.log(data[3]);
}


