const homepageScripts = (function() {
	// set session storage to open proper gallery category
	document.querySelector('.panel-botleft a').addEventListener('click', openDesignCategory);

	// mousing over or focusing a header link affects the corresponding panel
	document.querySelector('.header-link__music').addEventListener('mouseenter', () => togglePanelFX('.panel-topleft'));
	document.querySelector('.header-link__music').addEventListener('mouseleave', () => togglePanelFX('.panel-topleft'));
	document.querySelector('.header-link__music').addEventListener('focusin', () => togglePanelFX('.panel-topleft'));
	document.querySelector('.header-link__music').addEventListener('focusout', () => togglePanelFX('.panel-topleft'));

	document.querySelector('.header-link__code').addEventListener('mouseenter', () => togglePanelFX('.panel-midleft'));
	document.querySelector('.header-link__code').addEventListener('mouseleave', () => togglePanelFX('.panel-midleft'));
	document.querySelector('.header-link__code').addEventListener('focusin', () => togglePanelFX('.panel-midleft'));
	document.querySelector('.header-link__code').addEventListener('focusout', () => togglePanelFX('.panel-midleft'));
	
	document.querySelector('.header-link__illustration').addEventListener('mouseenter', () => togglePanelFX('.panel-topright'));
	document.querySelector('.header-link__illustration').addEventListener('mouseleave', () => togglePanelFX('.panel-topright'));
	document.querySelector('.header-link__illustration').addEventListener('focusin', () => togglePanelFX('.panel-topright'));
	document.querySelector('.header-link__illustration').addEventListener('focusout', () => togglePanelFX('.panel-topright'));

	document.querySelector('.header-link__design').addEventListener('mouseenter', () => togglePanelFX('.panel-botleft'));
	document.querySelector('.header-link__design').addEventListener('mouseleave', () => togglePanelFX('.panel-botleft'));
	document.querySelector('.header-link__design').addEventListener('focusin', () => togglePanelFX('.panel-botleft'));
	document.querySelector('.header-link__design').addEventListener('focusout', () => togglePanelFX('.panel-botleft'));

	document.querySelector('.header-link__aboutme').addEventListener('mouseenter', () => togglePanelFX('.panel-botright'));
	document.querySelector('.header-link__aboutme').addEventListener('mouseleave', () => togglePanelFX('.panel-botright'));
	document.querySelector('.header-link__aboutme').addEventListener('focusin', () => togglePanelFX('.panel-botright'));
	document.querySelector('.header-link__aboutme').addEventListener('focusout', () => togglePanelFX('.panel-botright'));

	// opens the corresponding category if it's clicked through on the home page
	function openDesignCategory() { 
		window.sessionStorage.setItem('galleryLanding','design');
		console.log('landing page set');
	}

	function togglePanelFX(panelName) {
		document.querySelector(`${panelName} .overlay`).classList.toggle('fx-overlay');
		document.querySelector(`${panelName} img`).classList.toggle('fx-panel');
	}
}());