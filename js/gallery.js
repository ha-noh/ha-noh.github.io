// load navbar
$(document).ready(function() {
	$('#nav-placeholder').load('html/navbar.html');
});

//opens category based on what option is selected from the sidebar navigation
function openCategory(e, categoryName){
	// if the function is trying to open the current category, return
	if(document.querySelector('.displayed').classList.contains(categoryName.slice(1))){
		console.log(`${categoryName} is already active`);
		return;
	}

	// hide active gallery section by toggling .displayed and .hidden classes
	let currentCategory = document.querySelector('.displayed');
	currentCategory.classList.add('hidden');
	currentCategory.classList.remove('displayed');

	// remove the .active class from active category's button
	document.querySelector('.active').classList.remove('active');

	// open new category and add .active to its button's classes
	let newCategory = document.querySelector(categoryName);
	newCategory.classList.add('displayed');
	newCategory.classList.remove('hidden');
	e.currentTarget.className += ' active';
}

function openSidebar(){
	document.querySelector('.sidebar').style.width = '250px';
}

function closeSidebar(){
	document.querySelector('.sidebar').style.width = '0';
}

// checks which link was clicked to reach this page
if(window.sessionStorage.getItem('galleryLanding') == 'design'){
	document.querySelector('.design-nav-button').click();
	//clear storage to return to default category on next page load
	window.sessionStorage.removeItem('galleryLanding');
}