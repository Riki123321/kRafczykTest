$(document).ready(function () {

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
                openSubmenu("two");
            } else {
                closeSubmenu("two");
            }   
            $(this).data("clicks", !clicks);
        });
        $('.menu-subcategory__main-text-three').click((e) => {
            var clicks = $(this).data('clicks');

            if (clicks) {
                openSubmenu("three");
            } else {
                closeSubmenu("three");
            }   
            $(this).data("clicks", !clicks);
        });

        $('.menu-subcategory__main-text-four').click((e) => {

            var clicks = $(this).data('clicks');

            if (clicks) {
                openSubmenu("four");
            } else {
                closeSubmenu("four");
            }   
            $(this).data("clicks", !clicks);
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


    const openSubmenu = (number) =>{
        $(".menu-subcategory--" + number + "__list").css('display', 'block');
        $(".menu > .menu__list >li.active").css('display', 'none');
        $(".menu-text >.arrow-left-menu").css('display', 'block');
        $(".menu-text > .menu-arrow-right").css('display', 'none');
        $(".menu-subcategory__main-text-" + number).css('padding-left', '10rem');

        if(number == "two"){
            $(".menu-subcategory--three").css('display', 'none');
            $(".menu-subcategory--four").css('display', 'none');
        }else if (number == "three"){
            $(".menu-subcategory--two").css('display', 'none');
            $(".menu-subcategory--four").css('display', 'none');
        }else if (number == "four"){
            $(".menu-subcategory--two").css('display', 'none');
            $(".menu-subcategory--three").css('display', 'none');
        }
    }

    const closeSubmenu = (number) =>{
        $(".menu-subcategory--" + number + "__list").css('display', 'none');
        $(".menu > .menu__list >li.active").css('display', 'block'); 
        $(".menu-subcategory__main-text-" + number).css('padding-left', '20px');
        $(".menu-text > .menu-arrow-right").css('display', 'block');
        $(".menu-text >.arrow-left-menu").css('display', 'none');

        if(number == "two"){
            $(".menu-subcategory--three").css('display', 'block');
            $(".menu-subcategory--four").css('display', 'block');
        }else if (number == "three"){
            $(".menu-subcategory--two").css('display', 'block');
            $(".menu-subcategory--four").css('display', 'block');
        }else if (number == "four"){
            $(".menu-subcategory--two").css('display', 'block');
            $(".menu-subcategory--three").css('display', 'block');
        }
    }

});