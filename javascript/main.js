var baloon = document.getElementById('baloon');

var pricing_heading = document.getElementById('pricing_heading')
var pricing_wrapper = document.getElementById('pricing_wrapper')

var product_page_heading = document.getElementById('product_page_heading')
var product_wrapper = document.getElementById('product_wrapper')

var rocket = document.getElementById('rocket')

var splash = document.getElementById('splash')
setTimeout(()=>{
    splash.style.display = 'none'
},1000)

window.addEventListener('scroll',()=>{
    rocket.style.bottom =   window.scrollY/2+'px'



    var w = window.screen.width;
    var h = window.screen.height;

    var c=1;
    var d =0.4;
    if(w<h){
        c=2
        d=1
    }
    if(window.scrollY>window.screen.height*c){
        pricing_heading.style.opacity = 1
        pricing_wrapper.style.opacity = 1

    }else{
        pricing_heading.style.opacity = 0
        pricing_wrapper.style.opacity = 0

    }

    if(window.scrollY>window.screen.height*d){
        product_page_heading.style.opacity = 1
        product_wrapper.style.opacity = 1

    }else{
        product_page_heading.style.opacity = 0
        product_wrapper.style.opacity = 0

    }
})