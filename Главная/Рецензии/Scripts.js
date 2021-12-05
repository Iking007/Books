var width = window.innerWidth;
img.addEventListener('mouseover', function(){
	width=window.innerWidth;
	if (width > 1200) {
		text.style.display = 'block';
		text.style.opacity = '1';
	}
});
text.addEventListener('mouseout', function(){
	width=window.innerWidth;
	if (width > 1200) {
		text.style.opacity = '0';
		setTimeout(function(){
			text.style.display = 'none';
		}, 1000);
	}
});