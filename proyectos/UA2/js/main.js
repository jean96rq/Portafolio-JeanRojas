


$(function(){

	$('.boton').on('click', function(){

		$('.nav .menu').toggleClass('visible-md');
		$('.nav .menu').toggleClass('visible-lg');
		
	
	
		
	});

});




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})






