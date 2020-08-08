document.querySelector('.btn-menu').addEventListener('click',function(){

    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.newcards',{delay:500});
ScrollReveal().reveal('.card-banner',{delay:500});
ScrollReveal().reveal('.card-banner-dos',{delay:500});
ScrollReveal().reveal('.social',{delay:500});