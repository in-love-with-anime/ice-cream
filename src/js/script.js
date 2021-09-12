$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        speed: 1500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        mobilefirst: true,
        easing:'easeInOutQuad'
    });
});