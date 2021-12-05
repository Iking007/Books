function slider(){
	if(im2.style.position == 'absolute'){
		im3.style.position = 'absolute';
		im3.style.animation = 'slideover 1s';
		im2.style.animation = 'slideout 1s';
		setTimeout(function(){
			im2.style.position = 'static';
		}, 1000);
	}
	else if(im3.style.position == 'absolute'){
		im4.style.position = 'absolute';
		im4.style.animation = 'slideover 1s';
		im3.style.animation = 'slideout 1s';
		setTimeout(function(){
			im3.style.position = 'static';
		}, 1000);
	}
	else if(im4.style.position == 'absolute'){
		im1.style.position = 'absolute';
		im1.style.animation = 'slideover 1s';
		im4.style.animation = 'slideout 1s';
		setTimeout(function(){
			im4.style.position = 'static';
		}, 1000);
	}
	else{
		im2.style.position = 'absolute';
		im2.style.animation = 'slideover 1s';
		im1.style.animation = 'slideout 1s';
		setTimeout(function(){
			im1.style.position = 'static';
		}, 1000);
	}
	setTimeout(slider, 5000);
}
