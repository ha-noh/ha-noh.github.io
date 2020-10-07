$(document).ready(function() {
	$('#nav-placeholder').load('html/navbar.html');
	
	let details = document.querySelector('details');
	details.addEventListener('toggle', event => {
		//element was toggled open
		if(details.open) {
			details.children[0].innerText = 'Change list';
		}
		//element was closed
		else {
			details.children[0].innerText = 'Click for change list';
		}
	});
});