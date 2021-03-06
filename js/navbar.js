const navbarScripts = (function() {
	window.addEventListener('DOMContentLoaded', () => {
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

		// opens the design category if the header link is clicked
		document.querySelector('.header-link__design').addEventListener('click', () => {
			window.sessionStorage.setItem('galleryLanding','design');
			console.log('landing page set');
		});

		document.querySelector('.mobile-links-button').addEventListener('click', () => {
			document.querySelector('.header-links').classList.toggle('isOpen');
		});
	});
}());