$(document).ready(function(){
	
	var mySwiper = new Swiper('.swiper-container', {
	  loop: true,

	  pagination: {
		el: '.swiper-pagination',
		clickable: false
	  },

	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	 
	 autoplay: {
		delay: 3000,
		disableOnInteraction: false 
	}
	})
	
	var mySwiper = new Swiper('.section-review .swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
    })
	
	$('.header').on( 'click', '.menu-button', function () {
		$('.header').toggleClass( 'menu-opened');
		
	
	})
	
	
});