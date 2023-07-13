import Swiper from "swiper"
import Pagination from "swiper/modules/pagination.mjs"
import Autoplay from "swiper/modules/autoplay.mjs"

Swiper.use([Pagination, Autoplay])

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
