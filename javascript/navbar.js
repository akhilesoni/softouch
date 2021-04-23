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
        navbar.style.color = 'black'
        home_option.style.color = 'black'
        contact_option.style.color = 'black'
        about_option.style.color = 'black'
        pricing_option.style.color = 'black'

        bar1.style.backgroundColor = 'black'
        bar2.style.backgroundColor = 'black'
        bar3.style.backgroundColor = 'black'

    }else{
        navbar.style.backgroundColor = 'transparent'
        navbar.style.color = 'white'
        home_option.style.color = 'white'
        contact_option.style.color = 'white'
        about_option.style.color = 'white'
        pricing_option.style.color = 'white'

        bar1.style.backgroundColor = 'white'
        bar2.style.backgroundColor = 'white'
        bar3.style.backgroundColor = 'white'
    }
})