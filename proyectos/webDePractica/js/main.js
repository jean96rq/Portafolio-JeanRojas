let popup = document.getElementById('popup')
let btnActivador = document.getElementById('btnActivador')
let btnActivador2 = document.getElementById('btnActivador2')

if(btnActivador){
btnActivador.addEventListener('click',()=>{
    popup.classList.toggle('active')
})
}
if(btnActivador2){  
btnActivador2.addEventListener('click',()=>{
    popup.classList.toggle('active')
})
}
let formulario = document.getElementById('form')
let logo = document.getElementById('logo')
if(formulario){
formulario.addEventListener('mouseenter', ()=>{
    logo.style.border='solid 5px #a494f5';
    logo.style.transition=' 0.5s'
})
formulario.addEventListener('mouseleave',()=>{
    logo.style.border='solid 2px #a494f5';
    logo.style.transition=' 0.5s'
})
}
// Menu responsive
let btnMenu = document.getElementById('btn-menu');
let list = document.getElementById('list');
let activadorMenu=true;
btnMenu.addEventListener('click',()=>{
    document.querySelector('.btn-menu i').classList.toggle('fa-times');
    if(activadorMenu){
        list.style.visibility='visible';
        list.style.transition='0.5s';
        list.style.opacity='1';

        activadorMenu=false;
    }else{
        list.style.visibility='hidden';
        list.style.transition='0.5s';
        list.style.opacity='0';

        activadorMenu=true;
    }
})

let popupCategorias = document.getElementById('popupCategorias')
let btnActivadorCategorias = document.getElementById('btn-categorias')
let btnActivadorCategoriasDos = document.getElementById('btn-categoriasDos')

if(btnActivadorCategorias){


btnActivadorCategorias.addEventListener('click',()=>{
popupCategorias.classList.toggle('categoriasActive')
})
}
if(btnActivadorCategoriasDos){  
btnActivadorCategoriasDos.addEventListener('click',()=>{
popupCategorias.classList.toggle('categoriasActive')
})
}
