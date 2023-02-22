import {heroSwiperInit, saleSwiperInit, sliderCardSwiper} from './modules/swiper.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    heroSwiperInit();
    saleSwiperInit();
    sliderCardSwiper();
  });
});
