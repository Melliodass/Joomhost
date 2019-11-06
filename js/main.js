$(function() {
    $('.rewiews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
    });

    $('.btn__menu').on('click', function(){
        $('.menu__list').slideToggle();
    });
});