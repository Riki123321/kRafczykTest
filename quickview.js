$(document).ready(function () {



    const quickview = document.querySelector(".quickview");
    const closeQuickview = document.querySelector(".close-quickview");
    const closeModal = document.querySelector(".close");
    const price = document.querySelector(".price");
    const discount = document.querySelector(".discount");
    const options = document.querySelector(".options-container");
    const sliderQuick = document.querySelector(".slider-for");
    const name = document.querySelector(".name-text");
    const type = document.querySelector(".name-type");
    const stars = document.querySelector(".opinion-stars");
    const valuesStars = document.querySelector(".stars");
    const size1 = document.querySelector(".size_1");
    const size2 = document.querySelector(".size_2");
    const size3 = document.querySelector(".size_3");
    const modal = document.querySelector(".modalDialog");
    const change = document.querySelector(".change");
    const preloader = document.querySelector(".preloader");
    var contentSlider = "";
    var Carousel = $(".slider");
    let countImages = 0;
    let counter = false;


    const button = document.querySelector(".button");


    button.addEventListener("click", () => {
        const selected = document.querySelector(".selected");
        let counter = false;

        for (var i = 0; i < selected.childNodes.length; i++) {
            if (selected.childNodes[i].className == "circle-green") {
                counter = true;
                break;
            }
        }

        modal.classList.add("active");

        if (counter == 0) {
            change.style.display = "block";
            preloader.style.display = "none";
        } else {
            change.style.display = "none";
            preloader.style.display = "block";
            modalDialogContainer.style.backgroundColor = "transparent";

            counterShopHeader++;
            counterShop.innerHTML = counterShopHeader;
            if (window.innerWidth < 757) {
                counterShop.style.marginLeft = "224px";
            }

            counterShop.style.display = "block";


            sum = price.innerHTML;
            sum = sum.substr(0, 3) * counterShopHeader;
            sum += ",00 zł";
            shopPrice.innerHTML = sum;
            shopPriceMobile.innerHTML = "Koszyk: " + counterShopHeader + "  |  Razem: " + sum;
        }

    });

    closeModal.addEventListener("click", () => {
        modal.classList.remove("active");
    });


    Carousel.each(function () {
        if ($(this).is(".slider-for")) {
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '130px',
                prevArrow: $('.arrow-prev-for'),
                nextArrow: $('.arrow-next-for'),
            });
        } else { }
    });


    const btn = document.querySelectorAll(".btn");
    btn.forEach(o => {
        o.addEventListener("click", (e) => {

            quickview.classList.add("active");
            var productId = o.getAttribute('data-product-id');

            $.ajax({
                url: "data.json",
                dataType: "json",
                success: function (data) {
                    data.map(product => {
                        if (product.id == productId) {
                            price.innerHTML = product.price + " " + product.currency;
                            discount.innerHTML = product.discount + " " + product.currency;
                            name.innerHTML = product.name;
                            type.innerHTML = product.type;

                            stars.innerHTML = "";
                            valuesStars.innerHTML = product.stars;
                            for (let i = 0; i < 5; i++) {
                                if (i < Math.floor(product.stars)) {
                                    stars.innerHTML += "<li class=\"star\"></li>";
                                } else {
                                    stars.innerHTML += "<li class=\"star star--none\"></li>";
                                }
                            }

                            let text = "";
                            for (let i = 0; i < product.sizes.length; i++) {

                                if (product.numbersizes[i] <= 0)
                                    text = "<span class=\"circle-red\"></span>";
                                else
                                    text = "<span class=\"circle-green\"></span>";

                                text += "Rozmiar: " + product.sizes[i] + " | ";

                                if (product.numbersizes[i] <= 0)
                                    text += "Niedostępne";
                                else
                                    text += "Dostępne";

                                if (i == 0)
                                    size1.innerHTML = text;
                                if (i == 1)
                                    size2.innerHTML = text;
                                if (i == 2)
                                    size3.innerHTML = text;

                            }

                            contentSlider = "";
                            for (let i = 0; i < product.images.length; i++) {
                                contentSlider += "<a href=\"#\" ><img src=\"" + product.images[i] + "\" alt=\"product\" class=\"slider-item\" style=\"width: 600px;margin-left: 10rem\"></a>";
                            }

                            $('.slider').slick('slickAdd', contentSlider);
                            countImages = product.images.length;

                        }
                    });
                }

            });
        });
    });


    closeQuickview.addEventListener("click", () => {

        for (let i = 0; i < countImages + 1; i++)
            $('.slider').slick('slickRemove', 0);

        quickview.classList.remove("active");

    });

    //////////// Custom Select /////////////////

    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");

    const optionsList = document.querySelectorAll(".option");

    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");
    });

    optionsList.forEach(o => {
        o.addEventListener("click", () => {
            selected.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
        });
    });

});
