export const heroSwiperInit = () => {
  new Swiper('.hero-swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export const saleSwiperInit = () => {
  new Swiper('.sale-swiper', {
    loop: false,
    pagination: {
      el: '.sale-swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        let arr = ['Кольца', 'Серьги', 'Браслеты', 'Часы'];
        return `<span class="${className}">${arr[index]}</span>`;
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
};

export const sliderCardSwiper = () => {
  new Swiper('.slider-card-swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    nested: true,
  });
};
