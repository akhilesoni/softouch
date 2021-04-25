var navbar = document.getElementById('navbar');
var home_option = document.getElementById('home_option')
var pricing_option = document.getElementById('pricing_option')
var about_option = document.getElementById('about_option')
var contact_option = document.getElementById('contact_option')

var bar1 = document.getElementById('bar1')
var bar2 = document.getElementById('bar2')
var bar3 = document.getElementById('bar3')

var menu_button = document.getElementById('menu_button');
var float_menu = document.getElementById('float_menu');
var cover = document.getElementById('cover')

menu_button.addEventListener('click',()=>{
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
    if(window.scrollY>50){
        navbar.style.backgroundColor = 'white'
      

    }else{
        navbar.style.backgroundColor = 'transparent'
   
    }
})