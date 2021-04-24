var navbar = document.getElementById('navbar');
var home_option = document.getElementById('home_option')
var pricing_option = document.getElementById('pricing_option')
var about_option = document.getElementById('about_option')
var contact_option = document.getElementById('contact_option')

var bar1 = document.getElementById('bar1')
var bar2 = document.getElementById('bar2')
var bar3 = document.getElementById('bar3')




window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        navbar.style.backgroundColor = 'white'
      

    }else{
        navbar.style.backgroundColor = 'transparent'
   
    }
})