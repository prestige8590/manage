const menuOpen = document.querySelector('.ri-menu-fill')
const menuClose = document.querySelector('.ri-close-fill')
const menu = document.querySelector('nav ul')

menuOpen.addEventListener('click', function(){
    menu.style.top = '40%'
    menuClose.style.display = 'block'
    menuOpen.style.display = 'none'
})

menuClose.addEventListener('click', function(){
    menu.style.top = '-40%'
    menuClose.style.display = 'none'
    menuOpen.style.display = 'block'
})

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

document.querySelectorAll('nav ul li').forEach(link => {
    link.addEventListener('click', function(){
        menu.style.top = '-40%'
        menuClose.style.display = 'none'
        menuOpen.style.display = 'block'
    })
})

document.querySelector('.ri-arrow-up-s-line').addEventListener('click', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.addEventListener("scroll", function() {
    //when the user scrolls 30px from the top, show the 'back-to-top' button(first for crome, second for Safari)
    if(document.documentElement.scrollTop >= 30 || document.body.scrollTop >= 30) {
        document.querySelector('.ri-arrow-up-s-line').style.display = "block"
    } else{
        document.querySelector('.ri-arrow-up-s-line').style.display = "none"
    }
})