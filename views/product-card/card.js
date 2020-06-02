$(document).ready(function () {


  var Carousel = $(".slider");

  Carousel.each(function () {
    if ($(this).is(".slider-for")) {
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '130px',
        prevArrow: $('.arrow-prev-product-card'),
        nextArrow: $('.arrow-next-product-card'),
        asNavFor: '.slider-nav',
      });
    }
    else if ($(this).is(".slider-nav")) {
      $(this).slick({
        slidesToScroll: 1,
        slidesToShow: 6, 
        prevArrow: $('.arrow-prev-slider-nav'),
        nextArrow: $('.arrow-next-slider-nav'),
        asNavFor: '.slider-for',
        vertical: true
      });
    }
    else if ($(this).is(".slider-accessories")) {
      $(this).slick({
        slidesToScroll: 1,
        slidesToShow: 2, 
        prevArrow: $('.arrow-prev-accessories'),
        nextArrow: $('.arrow-next-accessories'),
        responsive: [
          {
            breakpoint: 370,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              arrows: false,
            }
          }
        ],
      });
    }
  });

});


