import Swiper from "swiper"
import Pagination from "swiper/modules/pagination.mjs"
import Autoplay from "swiper/modules/autoplay.mjs"
import Navigation from "swiper/modules/navigation.mjs"

Swiper.use([Pagination, Autoplay, Navigation])

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
})

const advantagesSwiper = new Swiper(".advantages__swiper", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 24,
})

const productsSwiper = new Swiper(".products__swiper", {
  // loop: true,
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})
