$(document).ready(function () {

  //////////////////////// Select ////////////////////////////////////

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


  ////////////////////////// Sliders //////////////////////////////////

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



  ////////////////////////////// Validation ///////////////////////////

  const buttonSelect = document.querySelector(".button");
  const modal = document.querySelector(".modalDialog");
  const closeModal = document.querySelector(".close");
  const change = document.querySelector(".change");
  const preloader = document.querySelector(".preloader");
  const modalDialogContainer = document.querySelector(".modalDialog-container");
  const counterShop = document.querySelector(".counter-shop");
  const price = document.querySelector(".price");
  const shopPrice = document.querySelector(".shop-text--price");
  const shopPriceMobile = document.querySelector(".priceCard-mobile");
  let counterShopHeader = 0, sum;

  buttonSelect.addEventListener("click", () => {
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
      modalErrorShow();
    } else {
      loaderShow();
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


  const loaderShow = () => {
    preloader.style.display = "block";
    change.style.display = "none";
    modalDialogContainer.style.backgroundColor = "transparent";
  }

  const modalErrorShow = () => {
    change.style.display = "block";
    preloader.style.display = "none";
  }

});


