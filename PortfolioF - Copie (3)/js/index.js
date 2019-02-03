var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
$(document).ready(function(){
    $("#About").click(function() {
        $('html, body').animate({
        scrollTop: $("#a-propos").offset().top
        }, 700)
    });

    $("#work").click(function() {
        $('html, body').animate({
        scrollTop: $("#bannieretravail").offset().top
        }, 700)
    });

    $("#resume").click(function() {
        $('html, body').animate({
        scrollTop: $("#banniereresume").offset().top
        }, 700)
    });

    $("#contact").click(function() {
        $('html, body').animate({
        scrollTop: $("#Contact").offset().top
        }, 700)
    });
});