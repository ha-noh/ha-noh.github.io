const codeprojectsjs = (function(){
	window.addEventListener('DOMContentLoaded', e => {
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
}());