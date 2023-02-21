export const heroSwiperInit = () => {
  new Swiper('.hero-swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export const saleSwiperInit = () => {
  new Swiper('.sale-swiper', {
    // Optional parameters
    loop: false,

    // If we need pagination
    pagination: {
      el: '.sale-swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        let arr = ['Кольца', 'Серьги', 'Браслеты', 'Часы'];
        return `<span class="${className}">${arr[index]}</span>`;
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
};
