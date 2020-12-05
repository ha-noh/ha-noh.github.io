const galleryScripts = (function(){
	/* Initialize event listeners and default page content;
	 * open the sketches category by default
	 */
	window.addEventListener('DOMContentLoaded', () => {
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
		document.querySelector('.open-button').addEventListener('click', openSidebar);

		// Allow a focused image to be 'clicked' on with the Enter key
		document.addEventListener('keyup', function(e) {
			let allowedKeys = {
				13: 'enter'
			};
			handleInput(e, allowedKeys[e.keyCode]);
		});

		document.querySelector('.mobile-links-button').addEventListener('click', () => {
			document.querySelector('.header-links').classList.toggle('isOpen');
		});
	});


	// opens category based on the category name passed into it
	function openCategory(e, categoryName) {
		let currentCat = document.querySelector('.category-displayed');

		// If there is a category open, hide it first
		if(currentCat != null) hideCurrentCat(e, currentCat, categoryName);

		// open a new category and adjust its classList
		let newCategory = document.querySelector(categoryName);
		newCategory.classList.add('category-displayed');
		newCategory.classList.remove('category-hidden');

		document.querySelector('.gallery-header a').innerText = convertClassToHeading(categoryName);

		// make all images in the current open category focusable
		const images = document.querySelectorAll(`${categoryName} img`);
		for(const image of images) {
			image.tabIndex = 0;
		}

		// makes the category modal-ready
		document.querySelector(categoryName).classList.add('gallery-modal-ready');
		imageGalleryModal.readyGallery();
	}

	function hideCurrentCat(e, currentCat, pendingCat) {
		// If opening the current category, cancel the operation
		if(currentCat.classList.contains(pendingCat.slice(1))) {		
			// cross-browser safe method of stopping event propagation
			// this prevents the click event from bubbling up to the closeIfOutOfBounds listener
			if (!e) var e = window.event;
			e.cancelBubble = true;
			if (e.stopPropagation) e.stopPropagation();
	
			console.log(`${pendingCat} is already active`);
			closeSidebar();
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
		
		// mutual exclusion to prevent modal behavior while the the displayed category is changing
		imageGalleryModal.unreadyGallery();
		currentCat.classList.remove('gallery-modal-ready');

		closeSidebar();
	}

	// gets the appropriate display heading for a given gallery class
	function convertClassToHeading (categoryName) {
			switch(categoryName) {
				case '.sketches':
					return 'Sketches & Studies';
				case '.illustrations':
					return 'Illustrations';
				case '.design':
					return 'Social Media Design';
				case '.photos':
					return 'Photo Edits';
			}
	}

	function openSidebar(e) {
		document.querySelector('.sidebar').style.left = '0';

		const buttons = document.querySelectorAll('.sidebar button');
		for(const button of buttons) {
			button.tabIndex = 0;
		}

		document.querySelector('.sidebar-close-button').focus();

		// stopping event propagation prevents soft locking the sidebar
		if (!e) var e = window.event;
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();

		// close sidebar if a click occurs outside of the sidebar's bounds
		document.querySelector('html').addEventListener('click', closeIfOutOfBounds);
	}

	function closeSidebar() {
		document.querySelector('.sidebar').style.left = '-250px';

		const buttons = document.querySelectorAll('.sidebar button');
		for(const button of buttons) {
			button.tabIndex = -1;
		}

		document.querySelector('html').removeEventListener('click', closeIfOutOfBounds);
	}

	// handles keyup events
	function handleInput(event, keystroke) {
		switch(keystroke) {
			case 'enter':
				imageGalleryModal.open(event);
		}
	}

	/* Checks if the event target is the .sidebar div.
	 * (1) If the target is a sidebar button, the sidebar will behave as normal without triggering this function's related event.
	 * (2) If the target is anything else besides these 2 cases, the sidebar will close.
	 */
	function closeIfOutOfBounds(e) {
		e.target.classList.contains('sidebar') ? false : closeSidebar();
	}
}());