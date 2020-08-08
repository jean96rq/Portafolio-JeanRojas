$(function(){

	$('.boton').on('click', function(){

		$('nav .menu').toggleClass('visible-md').toggleClass('visible-lg').toggleClass('margin-left');

	});

});



$
$('.owl-carousel').owlCarousel({
    loop:true,
	margin:0,
    
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
            items:1,
            nav:true,
            loop:false
        }
	}
	
})
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({

	 })
	 $( ".owl-prev").html('<i class="flecha1 visible-md visible-lg"><img src="img/flecha1.png"></i>');
	 $( ".owl-next").html('<i class="flecha2  visible-md visible-lg"><img src="img/flecha2.png"></i>');
    }); 
    


    
 
    $(function (){
        $(window).scroll(function(){
           if ($(this).scrollTop() <0) {
            $('.navscroll1').addClass("azul");
           } else {
            $(".navscroll1").removeClass("azul");
           }
        });
    });
    $(function (){
        $(window).scroll(function(){
           if ($(this).scrollTop() <630) {
            $('.navscroll2').addClass("azul");
           } else {
            $(".navscroll2").removeClass("azul");
           }
        });
    });
    $(function (){
        $(window).scroll(function(){
           if ($(this).scrollTop() <1270) {
            $('.navscroll3').addClass("azul");
           } else {
            $(".navscroll3").removeClass("azul");
           }
        });
    });
    $(function (){
        $(window).scroll(function(){
           if ($(this).scrollTop() <2100) {
            $('.navscroll4').addClass("azul");
           } else {
            $(".navscroll4").removeClass("azul");
           }
        });
    });
    $(function (){
        $(window).scroll(function(){
           if ($(this).scrollTop() <2650) {
            $('.navscroll5').addClass("azul");
           } else {
            $(".navscroll5").removeClass("azul");
           }
        });
    });
    $(function (){
        $(window).scroll(function(){
           if ($(this).scrollTop() >3350) {
            $('.navscroll6').addClass("azul");
           } else {
            $(".navscroll6").removeClass("azul");
           }
        });
    });
     
     
     






$(document).ready(function() {
	$('.active1').click(function(){  //referimos el elemento ( clase o identificador de acción )
		$('html, body').animate({scrollTop:0}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
        
        return false;
	});
});
$(document).ready(function() {
	$('.active2').click(function(){  //referimos el elemento ( clase o identificador de acción )
		$('html, body').animate({scrollTop:630}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
		return false;
	});
});
$(document).ready(function() {
	$('.active3').click(function(){  //referimos el elemento ( clase o identificador de acción )
		$('html, body').animate({scrollTop:1270}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
		return false;
	});
});
$(document).ready(function() {
	$('.active4').click(function(){  //referimos el elemento ( clase o identificador de acción )
		$('html, body').animate({scrollTop:2100}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
		return false;
	});
});
$(document).ready(function() {
	$('.active5').click(function(){  //referimos el elemento ( clase o identificador de acción )
		$('html, body').animate({scrollTop:2650}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
		return false;
	});
});
$(document).ready(function() {
	$('.active6').click(function(){  //referimos el elemento ( clase o identificador de acción )
		$('html, body').animate({scrollTop:3350}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
		return false;
	});
});