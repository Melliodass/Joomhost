$(function() {
    $('.rewiews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
          ]
    });

    $('.btn__menu').on('click', function(){
        $('.menu__list').slideToggle();
    });
});