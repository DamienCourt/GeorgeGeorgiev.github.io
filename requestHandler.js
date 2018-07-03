var request = new XMLHttRequest();
request.open('GET','https://santiagovedra.github.io/GeorgeGeorgiev.github.io/dogs.json');

request.onload = function(){
	console.log(request.responseText);
};
request.send();