if(window.sessionStorage.getItem('nightmode') == 'true'){
	toggleNightmode();
	//doesn't need to wait for DOM to be ready since the call to this file already does
}

function toggleNightmode(){
	document.querySelector('html').style.backgroundColor = '#1d1e1f';
	document.querySelector('.lightmode-button').style.display = 'inline';
	document.querySelector('.nightmode-button').style.display = 'none';
	window.sessionStorage.setItem('nightmode','true');

	//if this is the gallery page, also change the category header bg color to match
	let galleryHeaders = document.querySelectorAll('.gallery-header'); 
	if(galleryHeaders.length > 0){
		for(const header of galleryHeaders) { 
			header.style.backgroundColor = '#1d1e1f';
		}
	}
}

function toggleLightmode(){
	document.querySelector('html').style.backgroundColor = 'white';
	document.querySelector('.lightmode-button').style.display ='none';
	document.querySelector('.nightmode-button').style.display = 'inline';
	window.sessionStorage.setItem('nightmode','false');

	let galleryHeaders = document.querySelectorAll('.gallery-header'); 
	if(galleryHeaders.length > 0){
		for(const header of galleryHeaders) {
			header.style.backgroundColor = 'white';
		}
	}
}