
var data;
var request = new XMLHttpRequest();
request.open('GET','https://santiagovedra.github.io/GeorgeGeorgiev.github.io/dogs.json');

request.onload = function(){
	data = JSON.parse(request.responseText);
	createGallery(data);
};

function createGallery(data){
	var target = document.getElementById('gallery_container');
	var output = '';
	for(i = 0; i < data.length; i++){
		var styleType = Math.floor(Math.random() * 4+1);
		output+='<figure class="tilt'+ styleType+'"><img src="'+data[i].photo+'"onclick="showProfile(this)" data-index="'+ i+'" /><figcaption>'+data[i].name+'</figcaption></figure>';
	}
	target.innerHTML = output;
}


//Loads Template content section
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

function showProfile(element)
{
 	var index = element.getAttribute('data-index');
 	document.getElementById('profile_photo').src = data[index].photo;

 	document.getElementById('gender').innerHTML = data[index].gender;
 	document.getElementById('age').innerHTML = data[index].age;
 	document.getElementById('breed').innerHTML = data[index].breed;
 	document.getElementById('sec_breed').innerHTML = data[index].sec_breed;
 	document.getElementById('weight').innerHTML = data[index].weight;
 	document.getElementById('city').innerHTML = data[index].city;
 	document.getElementById('other').innerHTML = data[index].other;
}




