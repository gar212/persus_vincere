$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
	items: 5,
    nav:false,
	dots:true,
	responsive:{
        0:{
            items:2,
			autoplay: true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
        },
        600:{
            items:4,
        },
        1000:{
            items:5
        }
    }
	  
  });
});