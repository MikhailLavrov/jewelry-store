import {heroSwiperInit, saleSwiperInit} from './modules/swiper.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    heroSwiperInit();
    saleSwiperInit();
  });
});
