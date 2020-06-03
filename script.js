$(document).ready(function () {
  if (window.innerWidth < 757) {
    $('.footer-nav__block').find('.list-block__head').click(function (e) {
      $(this).next().slideToggle();
      $(".list-block__list").not($(this).next()).slideUp();
    });
    $('.list-block-head').on('click', function (e) {
      e.preventDefault();
    });
  }

  var gadgetCarousel = $(".gallery-slides");

  gadgetCarousel.each(function () {
    if ($(this).is(".type-one-gallery-slides")) {
      $(this).slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: $('.arrow-prev-producent'),
        nextArrow: $('.arrow-next-producent'),
        responsive: [
          {
            breakpoint: 770,
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
    else if ($(this).is(".type-two-gallery-slides")) {
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
    else if ($(this).is(".type-three-gallery-slides")) {
      $(this).slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        prevArrow: $('.arrow-prev'),
        nextArrow: $('.arrow-next'),
        responsive: [
          {
            breakpoint: 1300,
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


  $(window).resize(function () {
    $('.gallery-slides').slick('resize');
  });


  $('.site-nav_menu').click((e) => {
    var clicks = $(this).data('clicks');
    if (clicks) {
      $('.menu').css('display', 'none');
      $('.header__site-nav').css('margin-left', '0');
    } else {
      $('.menu').css('display', 'block');

      if (window.innerWidth < 757) {
        $('.header__site-nav').css('margin-left', '-84%');
      } else {
        $('.menu').css('margin-top', '-40px');
      }

    }
    $(this).data("clicks", !clicks);
  })

  $(".menu-women").on("mouseover", function () {

  });

  



  if (window.innerWidth > 1020 && window.innerWidth < 1220) {
    $(".menu__banner").css('margin-left ', '0');
    $(".menu").css('width', '1000px');
  } else if (window.innerWidth > 1220) {
    $(".menu-subcategory").css('display', 'none');
    $(".menu").css({ 'background-color': 'white', 'height': '0', 'margin-bottom': '4rem' });
    $(".menu__list--under-banner").css('display', 'none');
    $(".menu__banner").css('display', 'none');
    $(".menu").css('width', '1200px');
  }


  if (window.innerWidth < 1020) {

    $('li.menu-item--active').click((e) => {

      var clicks = $(this).data('clicks');
      $target = $(event.target);

      if (clicks) {
        $("li.active > .menu-arrow-right").css('display', 'inline');
        $target.parent().removeClass('active');
        $(".menu > .menu__list >li").css('display', 'block');
        $(".menu-subcategory--two").css('display', 'none');
        $(".menu-subcategory--three").css('display', 'none');
        $(".menu-subcategory--four").css('display', 'none');
        $(".arrow-left-menu").css('display', 'none');
        $(".menu-item--active").find("a").css("padding-left", "20px");
      }
      else {
        $target.parent().addClass('active');
        $("li.active").siblings().css('display', 'none');
        $(".menu-subcategory--two").css('display', 'block');
        $(".menu-subcategory--three").css('display', 'block');
        $(".menu-subcategory--four").css('display', 'block');
        $(".menu-item--active").find("a").css("padding-left", "110px");
        $("li.active > .menu-arrow-right").css('display', 'none');
        $(".arrow-left-menu").css('display', 'block');
        $(".menu-text >.arrow-left-menu").css('display', 'none');
      }


      $(this).data("clicks", !clicks);
    })


    $('.menu-subcategory__main-text-two').click((e) => {
      var clicks = $(this).data('clicks');

      if (clicks) {
        $(".menu-subcategory--two__list").css('display', 'block');
        $(".menu > .menu__list >li.active").css('display', 'none');
        $(".menu-subcategory--three").css('display', 'none');
        $(".menu-subcategory--four").css('display', 'none');
        $(".menu-text >.arrow-left-menu").css('display', 'block');
        $(".menu-text > .menu-arrow-right").css('display', 'none');
        $(".menu-subcategory__main-text-two").css('padding-left', '10rem');


      } else {
        $(".menu-subcategory--two__list").css('display', 'none');
        $(".menu > .menu__list >li.active").css('display', 'block');
        $(".menu-subcategory--three").css('display', 'block');
        $(".menu-subcategory--four").css('display', 'block');
        $(".menu-subcategory__main-text-two").css('padding-left', '20px');
        $(".menu-text > .menu-arrow-right").css('display', 'block');
        $(".menu-text >.arrow-left-menu").css('display', 'none');
      }
      $(this).data("clicks", !clicks);
    });

    $('.menu-subcategory__main-text-one').click((e) => {
      $(".menu-subcategory--one__list").css('display', 'block');
    });

    $('.menu-subcategory__main-text-three').click((e) => {
      $(".menu-subcategory--three__list").css('display', 'block');
    });

    $('.menu-subcategory__main-text-four').click((e) => {
      $(".menu-subcategory--four__list").css('display', 'block');
    });

  } else {

    $(".menu-women").on({
      mouseenter: function () {
        $(".menu").css({ 'background-color': 'white', 'height': '50rem' });
        $(".menu-subcategory--one").css('display', 'grid');
        $(".menu-subcategory--two").css('display', 'grid');
        $(".menu-subcategory--three").css('display', 'grid');
        $(".menu-subcategory--four").css('display', 'grid');
        $(".menu__list--under-banner").css('display', 'flex');
        $(".menu__banner").css('display', 'block');
      },
    });


    $(".menu").on({
      mouseleave: function () {
        $(".menu-subcategory").css('display', 'none');
        $(".menu").css({ 'background-color': 'white', 'height': '0', 'margin-bottom': '4rem' });
        $(".menu__list--under-banner").css('display', 'none');
        $(".menu__banner").css('display', 'none');
      }
    });


  }

});