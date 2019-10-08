// load navbar and checks which link was clicked to reach this page
$(document).ready(function() {
	$('#nav-placeholder').load('html/navbar.html');

	//if the design panel was clicked to reach the gallery
	if(window.sessionStorage.getItem('galleryLanding') == 'design') {
		//document.querySelector('.design-nav-button').click();
		openCategory(event,'.design');
		//clear storage to return to default category on next page load
		window.sessionStorage.removeItem('galleryLanding');
	}
	else {
		//open the sketches category by default
		openCategory(event, '.sketches');
	}
});

//opens category based on the category name passed into it
function openCategory(e, categoryName) {
	// if the function is trying to open the current category, return
	let currentCat = document.querySelector('.category-displayed');
	if(currentCat != null) {
		if(currentCat.classList.contains(categoryName.slice(1))) {		
			console.log(`${categoryName} is already active`);
			return;
		}

		// hide active gallery section, if it exists, by toggling .category-displayed and .category-hidden classes
		currentCat.classList.add('category-hidden');
		currentCat.classList.remove('category-displayed');
	}

	// remove the .active class from active category's button
	//document.querySelector('.active').classList.remove('active');

	// open new category and add .active to its button's classes
	let newCategory = document.querySelector(categoryName);
	newCategory.classList.add('category-displayed');
	newCategory.classList.remove('category-hidden');
	//e.currentTarget.className += ' active';
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
