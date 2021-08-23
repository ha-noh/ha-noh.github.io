window.addEventListener('DOMContentLoaded', () => {
	let details = document.querySelector('details');

	details.addEventListener('toggle', () => {
		if(details.open) {
			details.children[0].innerText = 'Change list';
		}
		else {
			details.children[0].innerText = 'Click for change list';
		}
	});
});

