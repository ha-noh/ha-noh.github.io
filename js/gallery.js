const galleryScripts = (function(){
	// initialize event listeners and default page content
	$(document).ready(function() {
		$('#nav-placeholder').load('html/navbar.html');

		// open the sketches category by default
		if(window.sessionStorage.getItem('galleryLanding') == null) {
			openCategory(event, '.sketches');
		}

		// if the design panel was clicked to reach the gallery, open the design category by default
		else if(window.sessionStorage.getItem('galleryLanding') == 'design') {
			openCategory(event,'.design');
			//clear storage to return to default category on next page load
			window.sessionStorage.removeItem('galleryLanding');
		}

		document.querySelector('.sidebar-close-button').addEventListener('click', closeSidebar);
		document.querySelector('.link-sketches').addEventListener('click', () => openCategory(event, '.sketches'));
		document.querySelector('.link-illustrations').addEventListener('click', () => openCategory(event, '.illustrations'));
		document.querySelector('.link-design').addEventListener('click', () => openCategory(event, '.design'));
		document.querySelector('.link-photos').addEventListener('click', () => openCategory(event, '.photos'));
		document.querySelector('.openButton').addEventListener('click', openSidebar);

		// Allow a focused image to be 'clicked' on with the Enter key
		document.addEventListener('keyup', function(e) {
			let allowedKeys = {
				13: 'enter'
			};

			handleInput(e, allowedKeys[e.keyCode]);
		});
	});

	// opens category based on the category name passed into it, currently the event parameter is unused.
	function openCategory(e, categoryName) {
		let currentCat = document.querySelector('.category-displayed');

		// If there is a category open, hide it first
		if(currentCat != null) {
			// If opening the current category, cancel the operation
			if(currentCat.classList.contains(categoryName.slice(1))) {		
				// cross-browser safe method of stopping event propagation to the new click event added below
				if (!e) var e = window.event;
				e.cancelBubble = true;
				if (e.stopPropagation) e.stopPropagation();
		
				console.log(`${categoryName} is already active`);
				return;
			}

			// make currently visible gallery images unfocusable
			const visibleImages = document.querySelectorAll('category-displayed img');
			for(const image of visibleImages) {
				image.tabIndex = -1;
			}

			// hide current category
			currentCat.classList.add('category-hidden');
			currentCat.classList.remove('category-displayed');
			
			closeSidebar();
		}

		// open a new category and adjust its classList
		let newCategory = document.querySelector(categoryName);
		newCategory.classList.add('category-displayed');
		newCategory.classList.remove('category-hidden');

		// set the appropriate category name in header
		let catName;
		switch(categoryName) {
			case '.sketches':
				catName = 'Sketches & Studies';
				break;
			case '.illustrations':
				catName = 'Illustrations';
				break;
			case '.design':
				catName = 'Social Media Design';
				break;
			case '.photos':
				catName = 'Photo Edits';
				break;
		}
		document.querySelector('.gallery-header a').innerText = catName;

		// make all images in the current open category focusable
		const images = document.querySelectorAll(`${categoryName} img`);
		for (const image of images) {
			image.tabIndex = 0;
		}
		
	}

	function openSidebar(e) {
		document.querySelector('.sidebar').style.width = '250px';

		const buttons = document.querySelectorAll('.sidebar button');
		for(const button of buttons) {
			button.tabIndex = 0;
		}

		// focus the (now visible) sidebar
		document.querySelector('.sidebar').focus();


		// cross-browser safe method of stopping event propagation to the new click event added below
		if (!e) var e = window.event;
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();

		// close sidebar if a click occurs outside of the sidebar's bounds
		document.querySelector('html').addEventListener('click', closeIfOutOfBounds);
	}

	function closeSidebar() {
		document.querySelector('.sidebar').style.width = '0';

		const buttons = document.querySelectorAll('.sidebar button');
		for(const button of buttons) {
			button.tabIndex = -1;
		}

		document.querySelector('html').removeEventListener('click', closeIfOutOfBounds);
	}

	// helps handle keyup events
	function handleInput(event, keystroke) {
		switch(keystroke) {
			case 'enter':
				imageGalleryModal.openGalleryModal(event);
		}
	}

	/* Checks if the event target is the .sidebar div.
	 * (1) If the target is a sidebar button, the sidebar will behave as normal without triggering this function's related event.
	 * (2) If the target is anything else besides these 2 cases, the sidebar will close.
	 */
	function closeIfOutOfBounds(e) {
		e.target.classList.contains('sidebar') ? false : closeSidebar();
		// console.log(e.target)
	}
}());