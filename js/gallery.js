// load navbar
$(document).ready(function() {
	$('#nav-placeholder').load('html/navbar.html');
});

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
