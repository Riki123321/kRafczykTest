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
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: $('.arrow-prev-producent'),
            nextArrow: $('.arrow-next-producent'),
            responsive: [
                {
                  breakpoint: 757,
                  settings: {
                    slidesToShow: 4, 
                  }
                },
                {
                    breakpoint: 400,
                    settings: {
                      slidesToShow: 2, 
                    }
                  }
            ]
        });
        } 
        else if ($(this).is(".type-two-gallery-slides")){
        $(this).slick({ 
            slidesToScroll: 1,
            slidesToShow: 4, 
            prevArrow: $('.arrow-prev-product'),
            nextArrow: $('.arrow-next-product'),
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2,
                    
                  }
                },
                {
                    breakpoint: 400,
                    settings: {
                      slidesToShow: 1,
                      arrows: false,
                    }
                  }
            ]
        });
        }
        else if ($(this).is(".type-three-gallery-slides")){
            $(this).slick({
                infinite: true,
                slidesToScroll: 1,
                slidesToShow: 3,
                prevArrow: $('.arrow-prev'),
                nextArrow: $('.arrow-next'),
                responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: 2,
                      }
                    },
                    {
                        breakpoint: 400,
                        settings: {
                          slidesToShow: 1,
                        }
                      }
                ]
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