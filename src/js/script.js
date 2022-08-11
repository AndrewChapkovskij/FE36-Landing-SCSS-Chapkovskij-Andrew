$(document).ready(function () {
  $('.slider__items').slick({
    arrows: true,
    dots: true,
    // adaptiveHeight: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // speed: 300,
    // easing: 'lianer',
    // infinity: true,
    // initialSlide: 0,
    // autoplay: true,
    appendDots: $('#slider'),
    // autoplaySpeed: 3000,
  })
})

let mobileMenuBtn = querySelector('.nav-mobile__btn')
let mobileMenuList = querySelector('.nav-mobile__list')

mobileMenuBtn.addEventListener('click', (event) => {
  mobileMenuList.styleList.toggle('active')
})
