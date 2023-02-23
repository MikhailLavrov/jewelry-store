import {heroSwiperInit, saleSwiperInit, sliderCardSwiper, dailySwiperInner} from './modules/swiper.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    heroSwiperInit();
    saleSwiperInit();
    sliderCardSwiper();
    dailySwiperInner();

    const stars = document.querySelectorAll('.star');
    let rating = 0;

    stars.forEach((star, index) => {
      star.addEventListener('mouseover', () => {
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add('active');
        }
      });

      star.addEventListener('mouseout', () => {
        for (let i = 0; i < stars.length; i++) {
          if (i < rating) {
            stars[i].classList.add('active');
          } else {
            stars[i].classList.remove('active');
          }
        }
      });

      star.addEventListener('click', () => {
        rating = index + 1;
        for (let i = 0; i < stars.length; i++) {
          if (i < rating) {
            stars[i].classList.add('active');
          } else {
            stars[i].classList.remove('active');
          }
        }
      });
    });

  });
});
