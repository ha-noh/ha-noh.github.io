// load navbar and checks which link was clicked to reach this page
$(document).ready(function() {
	$('#nav-placeholder').load('html/navbar.html');

	//if the design panel was clicked to reach the gallery, open the design category by default
	if(window.sessionStorage.getItem('galleryLanding') == 'design') {
		openCategory(event,'.design');
		//clear storage to return to default category on next page load
		window.sessionStorage.removeItem('galleryLanding');
	}
	
	//open the sketches category by default
	else {
		openCategory(event, '.sketches');
	}

	document.querySelector('.sidebar-close-button').addEventListener('click', closeSidebar);
	document.querySelector('.link-sketches').addEventListener('click', () => openCategory(event, '.sketches'));
	document.querySelector('.link-illustrations').addEventListener('click', () => openCategory(event, '.illustrations'));
	document.querySelector('.link-design').addEventListener('click', () => openCategory(event, '.design'));
	document.querySelector('.link-photos').addEventListener('click', () => openCategory(event, '.photos'));
});

// opens category based on the category name passed into it, currently the event parameter is unused.
function openCategory(e, categoryName) {
	let currentCat = document.querySelector('.category-displayed');

	//if there is a category open
	if(currentCat != null) {
		// if opening the current category, cancel the operation
		if(currentCat.classList.contains(categoryName.slice(1))) {		
			console.log(`${categoryName} is already active`);
			return;
		}

		// otherwise, hide currently displayed category, 
		// remove the listener from its local 'open sidebar' button,
		// and set tabindex for non rendered images to -1
		document.querySelector(`.category-displayed .openButton`).removeEventListener('click', openSidebar);

		//make currently visible gallery images unfocusable
		const visibleImages = document.querySelectorAll('category-displayed img');
		for(const image of visibleImages) {
			image.tabIndex = -1;
		}

		currentCat.classList.add('category-hidden');
		currentCat.classList.remove('category-displayed');
	}

	// open a new category and adjust its classList
	let newCategory = document.querySelector(categoryName);
	newCategory.classList.add('category-displayed');
	newCategory.classList.remove('category-hidden');

	// make all images in the current open category focusable
	const images = document.querySelectorAll(`${categoryName} img`);
	for (const image of images) {
		image.tabIndex = 0;
	}

	//add listener to the local 'open sidebar' button
	document.querySelector(`${categoryName} .openButton`).addEventListener('click', openSidebar);
}

function openSidebar() {
	document.querySelector('.sidebar').style.width = '250px';

	const buttons = document.querySelectorAll('.sidebar button');
	for(const button of buttons) {
		button.tabIndex = 0;
	}

	//makes the first tab-able element the newly opened sidebar
	document.querySelector('.sidebar button').focus();
}

function closeSidebar() {
	document.querySelector('.sidebar').style.width = '0';

	const buttons = document.querySelectorAll('.sidebar button');
	for(const button of buttons) {
		button.tabIndex = -1;
	}
}
