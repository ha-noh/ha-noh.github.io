const homepageScripts = (function(){
	document.querySelector('.panel-botleft a').addEventListener('click', openDesignCategory);

	// opens the corresponding category if it's clicked through on the home page
	function openDesignCategory(){
		window.sessionStorage.setItem('galleryLanding','design');
		console.log('landing page set');
	}
}());