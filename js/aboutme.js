window.addEventListener('DOMContentLoaded', () => {
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

	const stickyEle = document.querySelector('header');
	
	const observer = new IntersectionObserver(
		([e]) => {
			e.target.classList.toggle('isSticky', e.intersectionRatio < 1);
			const nodes = e.target.children;
			for(const node of nodes) {
				node.classList.toggle('isSticky', e.intersectionRatio < 1);
			}
		},	
		{threshold: [1]}
	);

	observer.observe(stickyEle);

	// opens the corresponding category if it's clicked through on the home page
	document.querySelector('.header-link__design').addEventListener('click', () => {
		window.sessionStorage.setItem('galleryLanding','design');
		console.log('landing page set');
	});
});

