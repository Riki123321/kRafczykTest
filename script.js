$(document).ready(function () { 
    let widthWindowPoint = 757; 
    if (window.innerWidth < widthWindowPoint) { 
        $('.footer-nav__block').find('.list-block__head').click(function (e) {
            $(this).next().slideToggle();
            $(".list-block__list").not($(this).next()).slideUp();
        });
        $('.list-block-head').on('click', function (e) {
            e.preventDefault();
        });
    }
});