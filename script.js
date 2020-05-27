$(document).ready(function () {
    let slidesToshowOneType =2, slidesToshowTwoType =1;

    if (window.innerWidth < 757) {
        $('.footer-nav__block').find('.list-block__head').click(function (e) {
            $(this).next().slideToggle();
            $(".list-block__list").not($(this).next()).slideUp();
        });
        $('.list-block-head').on('click', function (e) {
            e.preventDefault();
        });
    }

    if (window.innerWidth > 757) {
        slidesToshowOneType =4;
        slidesToshowTwoType =2;
    }

    if (window.innerWidth >= 1424) {
        slidesToshowOneType =6;
        slidesToshowTwoType =3;
    }

    var gadgetCarousel = $(".gallery-slides");
  
    gadgetCarousel.each(function() {
        if ($(this).is(".type-one-gallery-slides")) {
            $(this).slick({
            infinite: true,
            slidesToShow: slidesToshowOneType,
            slidesToScroll: 1,
            prevArrow: $('.arrow-prev-producent'), 
            nextArrow: $('.arrow-next-producent'), 
        });
        } 
        else if ($(this).is(".type-two-gallery-slides")){
        $(this).slick({
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: slidesToshowTwoType,
            prevArrow: $('.arrow-prev'),
            nextArrow: $('.arrow-next'),
        });
        }
        else {
        $(this).slick();
        }
    })

    
    $(window).resize(function() {
        $('.gallery-slides').slick('resize');
      });

});