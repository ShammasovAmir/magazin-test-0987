import Swiper from "swiper";
import Pagination from "swiper/modules/pagination.mjs";
import Autoplay from "swiper/modules/autoplay.mjs";
import Navigation from "swiper/modules/navigation.mjs";

Swiper.use([Pagination, Autoplay, Navigation]);

const bannerSwiper = new Swiper(".banner__swiper", {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const advantagesSwiper = new Swiper(".advantages__swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    1140: {
      slidesPerView: 5,
      spaceBetween: 24,
    },

    910: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    537: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const productsSwiper = new Swiper(".products__swiper", {
  // loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    1168: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    762: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*
 * Accordion
 */

const accordions = document.querySelectorAll(".footer__accordion-title");

accordions.forEach((acc) => {
  acc.addEventListener("click", function () {
    this.classList.toggle("footer__accordion-title--active");
    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) panel.style.maxHeight = null;
    else panel.style.maxHeight = panel.scrollHeight + "px";
  });
});
