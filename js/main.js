
window.onload = function(){

    tabs_title = document.getElementsByClassName('tab-title');
    tabs_content = document.getElementsByClassName('tab-content');
  
    function clearTabs()
    {
  
      for(var i = 0; i < tabs_title.length; i++)
      {
        tabs_title[i].classList.remove('tab-title-active');
        tabs_content[i].classList.remove('tab-content-active');
      }

    }
  
    function initTabs()
    {
      Array.from(tabs_title).forEach(function(element, index){
  
        element.addEventListener('click', function(e){
  
          clearTabs();
          this.classList.add('tab-title-active');
          tabs_content[index].classList.add('tab-content-active');
  
        });
  
      });
  
    }
  
    initTabs();
  


    


//  $(window).scroll(function() {
//   if ($("#menu").offset().top > 100) {
//        $("#menu").removeClass("margin-40");
//        $("#menu").addClass("s");
     
//   } else {
//       $("#menu").addClass("margin-40");
//       $("#menu").removeClass("s");
//   }
// });









$(document).ready(function() {
  $('.act1').click(function(){  //referimos el elemento ( clase o identificador de acción )
  $('html, body').animate({scrollTop:0}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
    
    return false;
  });
  });
  $(document).ready(function() {
  $('.act2').click(function(){  //referimos el elemento ( clase o identificador de acción )
  $('html, body').animate({scrollTop:500}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
  return false;
  });
  });
  $(document).ready(function() {
  $('.act3').click(function(){  //referimos el elemento ( clase o identificador de acción )
  $('html, body').animate({scrollTop:1180}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
  return false;
  });
  });
  $(document).ready(function() {
  $('.act4').click(function(){  //referimos el elemento ( clase o identificador de acción )
  $('html, body').animate({scrollTop:1800}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
  return false;
  });
  });
  $(document).ready(function() {
  $('.act5').click(function(){  //referimos el elemento ( clase o identificador de acción )
  $('html, body').animate({scrollTop:2100}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
  return false;
  });
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
     if ($(this).scrollTop() <500) {
      $('.navscroll2').addClass("azul");
     } else {
      $(".navscroll2").removeClass("azul");
     }
  });
});
$(function (){
  $(window).scroll(function(){
     if ($(this).scrollTop() <1180) {
      $('.navscroll3').addClass("azul");
     } else {
      $(".navscroll3").removeClass("azul");
     }
  });
});
$(function (){
  $(window).scroll(function(){
     if ($(this).scrollTop() <1800) {
      $('.navscroll4').addClass("azul");
     } else {
      $(".navscroll4").removeClass("azul");
     }
  });
});
$(function (){
  $(window).scroll(function(){
     if ($(this).scrollTop() <2100) {
      $('.navscroll5').addClass("azul");
     } else {
      $(".navscroll5").removeClass("azul");
     }
  });
});

























};