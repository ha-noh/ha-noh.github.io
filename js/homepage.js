// replaces dummy nav with icons
$(document).ready(function() {
	$("#nav-placeholder").load("html/navbar.html");
});

// opens the corresponding category if it's clicked through on the home page
function openDesignCategory(){
	window.sessionStorage.setItem('galleryLanding','design');
}