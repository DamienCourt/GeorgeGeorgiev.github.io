	function fixHeaderMargin() {
		var header = document.getElementById('main_header');
    	var main = document.getElementsByTagName('main')[0];
    	var margin = window.getComputedStyle(header).getPropertyValue('height');
		main.style.marginTop = margin;
	}
