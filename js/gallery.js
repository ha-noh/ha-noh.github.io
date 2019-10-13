// load navbar and checks which link was clicked to reach this page
$(document).ready(function() {
	$('#nav-placeholder').load('html/navbar.html');

	//if the design panel was clicked to reach the gallery
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
	// if the function is trying to open the current category, return
	let currentCat = document.querySelector('.category-displayed');

	if(currentCat != null) {
		if(currentCat.classList.contains(categoryName.slice(1))) {		
			console.log(`${categoryName} is already active`);
			return;
		}

		// hide and remove event listener from currently displayed gallery section
		document.querySelector(`.category-displayed .openButton`).removeEventListener('click', openSidebar);
		currentCat.classList.add('category-hidden');
		currentCat.classList.remove('category-displayed');
	}

	// open new category and adjust its classList
	let newCategory = document.querySelector(categoryName);
	newCategory.classList.add('category-displayed');
	newCategory.classList.remove('category-hidden');
	document.querySelector(`${categoryName} .openButton`).addEventListener('click', openSidebar);
}

function openSidebar() {
	document.querySelector('.sidebar').style.width = '250px';

	const buttons = document.querySelectorAll('.sidebar button');
	for(const button of buttons) {
		button.tabIndex = 0;
	}
}

function closeSidebar() {
	document.querySelector('.sidebar').style.width = '0';

	const buttons = document.querySelectorAll('.sidebar button');
	for(const button of buttons) {
		button.tabIndex = -1;
	}
}
