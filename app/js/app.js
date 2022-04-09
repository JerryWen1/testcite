import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

// import '~/app/vendor/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});
	
	
})