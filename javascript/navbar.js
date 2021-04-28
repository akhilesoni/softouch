var navbar = document.getElementById('navbar');





var float_menu_button = document.getElementById('float_menu_button');
var float_menu = document.getElementById('float_menu');
var cover = document.getElementById('cover')

float_menu_button.addEventListener('click',()=>{
    float_menu.style.display = 'block';
    cover.style.display = 'block';
    float_menu.style.opacity = 1;
    cover.style.opacity = 1;
    float_menu.style.transform = 'translateY(20px)'
})

cover.addEventListener('click',()=>{
    float_menu.style.display = 'none';
    cover.style.display = 'none';
    float_menu.style.opacity = 0;
    cover.style.opacity = 0;
    float_menu.style.transform = 'translateY(-20px)'

})
float_menu.addEventListener('click',()=>{
    float_menu.style.display = 'none';
    cover.style.display = 'none';
    float_menu.style.opacity = 0;
    cover.style.opacity = 0;
    float_menu.style.transform = 'translateY(-20px)'

})



window.addEventListener('scroll',()=>{
  
})