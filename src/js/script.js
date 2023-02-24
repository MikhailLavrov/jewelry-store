import {heroSwiperInit, saleSwiperInit, sliderCardSwiper, dailySwiperInner, dailySwiper} from './modules/swiper.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    heroSwiperInit();
    saleSwiperInit();
    sliderCardSwiper();
    dailySwiperInner();
    dailySwiper();

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

    const selectSingleList = document.querySelectorAll('.custom-select__select');

    selectSingleList.forEach((selectSingle) => {
      const selectSingle_title = selectSingle.querySelector('.custom-select__select-title');
      const selectSingle_labels = selectSingle.querySelectorAll('.custom-select__label');

      // Toggle menu
      selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
          selectSingle.setAttribute('data-state', '');
        } else {
          selectSingle.setAttribute('data-state', 'active');
        }
      });

      // Close when click to option
      for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
          selectSingle_title.textContent = evt.target.textContent;
          selectSingle.setAttribute('data-state', '');
        });
      }
    });


  });
});
