var baloon = document.getElementById('baloon');

window.addEventListener('scroll',()=>{
    baloon.style.top = window.scrollY+'px'
})